import { useEffect, useState } from "react";
import { API_URL } from "../lib/constants";

const useAuth = () => {
  const [auth, setAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const resp = await fetch(`${API_URL}/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setAuth(resp.ok);
    };
    fetchUser();
  }, []);

  return auth;
};

export default useAuth;
