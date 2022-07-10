import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Quote from "../components/Quote";
import { API_URL } from "lib/constants";
import { iQuote } from "types";

interface iSSRProps {
  ssrQuotes: iQuote[];
  offset: number;
  limit: number;
}
//@TODO: check window y for lazy loading
export default function Feed({ ssrQuotes, limit }: iSSRProps) {
  const [quotes, setQuotes] = useState<iQuote[]>(ssrQuotes);
  const [offset, setOffset] = useState<number>(limit);
  useEffect(() => {
    const fetchUser = async () => {
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
    };
    fetchUser();
  }, [offset]);
  const loadMore = () => {
    setOffset((prev) => prev + limit);
  };
  return (
    <div className="container">
      {quotes?.map((quoteData) => (
        <Quote {...quoteData} key={quoteData.id} />
      ))}
      <button onClick={loadMore}>Load more</button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
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
