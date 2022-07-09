import { useEffect, useState } from "react";
import { iQuote } from "../types";
import { API_URL } from "../lib/constants";

const useQuotes = () => {
  const [quotes, setQuotes] = useState<iQuote[]>();

  useEffect(() => {
    const fetchUser = async () => {
      const resp = await fetch(`${API_URL}/posts`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await resp.json();
      setQuotes(json);
    };
    fetchUser();
  }, []);

  return quotes;
};

export default useQuotes;
