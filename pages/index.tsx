import Link from "next/link";
import * as React from "react";

export default function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">
          <h1>Quote Share</h1>
        </div>
        <div className="sub-title">
          <span>Where you share</span>
          <br />
          <span>what's on your mind</span>
        </div>
        <div className="join-button">
          <Link href="/login">
            <button id="join-now" type="button">
              <span>Join now</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
