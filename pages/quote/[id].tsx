import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fetchQuote from "lib/quote";
import Quote from "components/Quote";
import Layout from "components/Layout";
import { iQuote } from "types";

//only fetches db if link is opened on client side without the query parameters
//e.g. opened from a 3rd party website with a link only to a single spec quote
//otherwise if the quote is opened from /feed it is rendered based on the query params
export default function SingleQuote() {
  const router = useRouter();
  const [quote, setQuote] = useState<iQuote>();

  useEffect(() => {
    if (!router.isReady) return;

    const { id, username, title, content } = router.query;
    if (username && title && content) {
      setQuote({
        id: id as string,
        username: username as string,
        title: title as string,
        content: content as string,
      });
    } else fetchQuote({ id }).then((x) => setQuote(x));
  }, [router.isReady]);

  return (
    <Layout>
      <div className="container">{quote && <Quote {...quote} />}</div>;
    </Layout>
  );
}
