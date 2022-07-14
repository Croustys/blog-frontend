import { useEffect, useState } from "react";
import Quote from "components/Quote";
import { iQuote } from "types";
import { API_URL } from "lib/constants";

interface iUserQuote {
  username: string;
  email: string;
  posts: iQuote[];
}
//@TODO: design
export default function SingleQuote() {
  const [userQuotes, setUserQuotes] = useState<iUserQuote>();

  useEffect(() => {
    const fetchUser = async () => {
      const resp = await fetch(`${API_URL}/user`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await resp.json();
      console.log(json.quotes);
      setUserQuotes(json as iUserQuote);
    };
    fetchUser();
  }, []);
  return (
    <div className="container">
      <div className="title">
        <h1>{userQuotes?.username}</h1>
        <h1>{userQuotes?.email}</h1>
      </div>
      {userQuotes?.posts?.map((quote) => (
        <Quote {...quote} key={quote.id} />
      ))}
    </div>
  );
}
