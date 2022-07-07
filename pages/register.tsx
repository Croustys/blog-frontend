import { NextPage } from "next";

const Register: NextPage = () => {
  return (
    <div className="container">
      <div className="title top">
        <h1>Register</h1>
      </div>
      <div className="credentials-container">
        <div className="credential-wrapper">
          <div className="credential-input">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
          </div>
        </div>
        <div className="credential-wrapper">
          <div className="credential-input">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>
        </div>
        <div className="credential-wrapper">
          <div className="credential-input">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" />
          </div>
        </div>
      </div>
      <div className="join-button logreg">
        <button id="join-now" type="button">
          <span>Create account</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
