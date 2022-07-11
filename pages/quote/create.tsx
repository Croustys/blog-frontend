import { API_URL } from "lib/constants";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function CreateQuote() {
  const { push } = useRouter();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    const title = titleRef.current?.value;
    const content = contentRef.current?.value;
    const resp = await fetch(`${API_URL}/create`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    if (!resp.ok && resp.status === 401) {
      push("/login");
    }
    push("/feed");
  };
  return (
    <div className="container">
      <div className="title top">New Quote</div>
      <div className="credentials-container">
        <div className="credential-wrapper">
          <div className="credential-input">
            <label htmlFor="title">Quote</label>
            <input id="title" type="text" ref={titleRef} />
          </div>
        </div>
        <div className="credential-wrapper">
          <div className="credential-input">
            <label htmlFor="description">Description</label>
            <input id="description" type="text" ref={contentRef} />
          </div>
        </div>
      </div>
      <div className="join-button logreg">
        <button onClick={() => handleSubmit()} id="join-now" type="button">
          <span>Create</span>
        </button>
      </div>
    </div>
  );
}
