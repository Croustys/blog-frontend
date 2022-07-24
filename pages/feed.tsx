import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { GetServerSideProps } from "next";
import Quote from "../components/Quote";
import { API_URL } from "lib/constants";
import { iQuote } from "types";

import Layout from "components/Layout";
import LazyLoading from "components/Loading/Lazy";

interface iSSRProps {
  ssrQuotes: iQuote[];
  offset: number;
  limit: number;
}

export default function Feed({ ssrQuotes, limit }: iSSRProps) {
  const [quotes, setQuotes] = useState<iQuote[]>(ssrQuotes);
  const [offset, setOffset] = useState<number>(limit);
  const [loading, setLoading] = useState<boolean>(false);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastQuoteRef = useCallback((node: unknown) => {
    if (observer.current) observer.current?.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setOffset((prev) => prev + limit);
      }
    });
    if (node) observer.current?.observe(node as Element);
  }, []);
  const lastQuoteId = useMemo(() => quotes[quotes.length - 1].id, [quotes]);

  useEffect(() => {
    //@TODO: implement useUserFetch hook
    const fetchUser = async () => {
      setLoading(true);
      const resp = await fetch(
        `${API_URL}/posts?offset=${offset}&limit=${limit}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await resp.json();
      if (json) setQuotes((prev: iQuote[]) => [...prev, ...(json as iQuote[])]);
      setLoading(false);
    };
    fetchUser();
  }, [offset]);

  return (
    <Layout>
      <div className="container">
        {quotes?.map((quoteData) =>
          quoteData.id === lastQuoteId ? (
            <div ref={lastQuoteRef} key={quoteData.id}>
              <Quote {...quoteData} />
            </div>
          ) : (
            <Quote {...quoteData} key={quoteData.id} />
          )
        )}
        {loading && <LazyLoading />}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const limit = 6;
  const preRenderQuotes = await fetch(
    `${API_URL}/posts?offset=0&limit=${limit}`,
    {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }
  );
  const ssrQuotes: iQuote[] = await preRenderQuotes.json();
  return {
    props: { limit, ssrQuotes },
  };
};
