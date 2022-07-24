import { NextPage } from "next";
import Layout from "components/Layout";
import fetchLogout from "lib/logout";

const Logout: NextPage = () => {
  const logout = async () => {
    const resp = await fetchLogout();

    if (resp.ok || resp.status === 401) {
      const { push } = (await import("next/router")).default;
      push("/login");
    }
  };
  return (
    <Layout>
      <div className="logout" onClick={() => logout()}>Logout</div>
    </Layout>
  );
};

export default Logout;
