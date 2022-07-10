import { NextPage } from "next";
import { useRouter } from "next/router";

import useAuth from "hooks/useAuth";

import Credentials from "components/Credentials";

const Login: NextPage = () => {
  const auth = useAuth();
  const { push } = useRouter();
  if (auth) push("/feed");
  return <Credentials isLogin />;
};

export default Login;
