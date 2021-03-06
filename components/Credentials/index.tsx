import { NextPage } from "next";
import Link from "next/link";
import { useRef, memo, useState } from "react";
import isAnyFieldsEmpty from "lib/empty-fields";

import Loading from "../Loading";
import Notification from "../Notification";

interface Props {
  isLogin?: boolean;
}
interface FetchError {
  error: boolean;
  msg: string;
}

const Credentials: NextPage<Props> = ({ isLogin = false }) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<FetchError>({ error: false, msg: "" });

  const handleSubmit = () => {
    setError({ error: false, msg: "" });
    setLoading(true);
    isLogin ? loginHandler() : registerHandler();
  };
  const loginHandler = async () => {
    const email = emailRef.current?.value as string;
    const password = passwordRef.current?.value as string;

    if (isAnyFieldsEmpty({ email, password })) {
      setError({ error: true, msg: "Missing Login Credentials" });
      return;
    }
    const { fetchLogin } = await import("lib/log-reg");
    const resp = await fetchLogin({ email, password });
    const json = await resp.json();

    if (resp.ok) {
      const { push } = (await import("next/router")).default;
      push("/feed");
      return;
    }
    setLoading(false);
    setError({ error: true, msg: json.StatusMessage });
  };
  const registerHandler = async () => {
    const username = usernameRef.current?.value as string;
    const email = emailRef.current?.value as string;
    const password = passwordRef.current?.value as string;

    if (isAnyFieldsEmpty({ username, email, password })) {
      setError({ error: true, msg: "Missing Register Information" });
      return;
    }

    const { fetchRegister } = await import("lib/log-reg");
    const resp = await fetchRegister({ username, email, password });
    const json = await resp.json();

    if (resp.ok) {
      const { push } = (await import("next/router")).default;
      push("/feed");
      return;
    }
    setLoading(false);
    setError({ error: true, msg: json.StatusMessage });
  };
  if (loading) return <Loading />;

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
      {error.error && <Notification msg={error.msg} />}
    </div>
  );
};

export default memo(Credentials);
