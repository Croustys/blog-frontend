import * as React from "react";
import { useRouter } from "next/router";
import useQuote from "hooks/useQuote";
import Quote from "components/Quote";
import { iQuote } from "types";

export default function Feed() {
  const { query } = useRouter();
  const { id } = query;
  const quote = useQuote(id as string);
  return (
    <div className="container">
      <Quote {...quote as iQuote} />
    </div>
  );
}
