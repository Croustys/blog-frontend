import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Quote from "components/Quote";
import { iQuote } from "types";
import { API_URL } from "lib/constants";
import Layout from "components/Layout";

export default function SingleQuote() {
  const router = useRouter();
  const [quotes, setQuotes] = useState<iQuote[]>();

  const { username } = router.query;
  useEffect(() => {
    if (!router.isReady) return;

    const fetchUser = async () => {
      const resp = await fetch(`${API_URL}/user/${username as string}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await resp.json();
      setQuotes(json as iQuote[]);
    };
    fetchUser();
  }, [router.isReady]);

  return (
    <Layout>
      <div className="container">
        <div className="title">
          <h1>{username}</h1>
        </div>
        {quotes?.map((quote) => (
          <Quote {...quote} key={quote.id} />
        ))}
      </div>
    </Layout>
  );
}
