import * as React from "react";
import { useRouter } from "next/router";
import useQuote from "hooks/useQuote";

export default function Feed() {
  const { query } = useRouter();
  const { id } = query;
  const quote = useQuote(id as string);
  return (
    <div className="container">
      <div className="test">
        {quote?.username}
        {quote?.title}
        {quote?.content}
      </div>
    </div>
  );
}
