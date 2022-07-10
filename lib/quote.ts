import { iQuote } from "../types";
import { API_URL } from "../lib/constants";

interface QueryProps {
  id: string | undefined | string[];
}
const fetchQuote = async ({ id }: QueryProps) => {
  const resp = await fetch(`${API_URL}/post/${id as string}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await resp.json();

  return json as iQuote;
};

export default fetchQuote;
