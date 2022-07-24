import { API_URL } from "../lib/constants";
import type { LoginProps, RegisterProps } from "types";

const fetchLogin = async ({ email, password }: LoginProps) => {
  const resp = await fetch(`${API_URL}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return resp;
};

const fetchRegister = async ({ username, email, password }: RegisterProps) => {
  const resp = await fetch(`${API_URL}/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });

  return resp;
};

export { fetchLogin, fetchRegister };
