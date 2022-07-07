import { NextPage } from "next";
import Link from "next/link";
import { useRef } from "react";
import { API_URL } from "../../lib/constants";

interface Props {
  isLogin?: boolean;
}

const Credentials: NextPage<Props> = ({ isLogin = false }) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (isLogin) loginHandler();
    else registerHandler();
  };
  const loginHandler = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const resp = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await resp.json();
    console.log(json);
  };
  const registerHandler = async () => {
    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const resp = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    const json = await resp.json();
    console.log(json);
  };

  return (
    <div className="container">
      <div className="title top">
        {isLogin ? <h1>Sign in</h1> : <h1>Register</h1>}
      </div>
      <div className="credentials-container">
        {!isLogin && (
          <div className="credential-wrapper">
            <div className="credential-input">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" ref={usernameRef} />
            </div>
          </div>
        )}
        <div className="credential-wrapper">
          <div className="credential-input">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" ref={emailRef} />
          </div>
        </div>
        <div className="credential-wrapper">
          <div className="credential-input">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" ref={passwordRef} />
            {!isLogin ? (
              <span className="sign-register-link">
                Already registered?{" "}
                <Link href="/login">
                  <a>Sign in</a>
                </Link>
              </span>
            ) : (
              <span className="sign-register-link">
                Don't have an account yet?{" "}
                <Link href="/register">
                  <a>Register</a>
                </Link>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="join-button logreg">
        <button onClick={() => handleSubmit()} id="join-now" type="button">
          {isLogin ? <span>Continue</span> : <span>Create account</span>}
        </button>
      </div>
    </div>
  );
};

export default Credentials;
