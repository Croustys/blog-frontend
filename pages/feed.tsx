import * as React from "react";
import Quote from "../components/Quote";
import useQuotes from "../hooks/useQuotes";

export default function Feed() {
  const quotes = useQuotes();
  return (
    <div className="container">
      {quotes?.map((quoteData) => (
        <Quote {...quoteData} key={quoteData.id} />
      ))}
    </div>
  );
}
