import { API_URL } from "../lib/constants";

const fetchLogout = async () => {
  const resp = await fetch(`${API_URL}/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return resp;
};

export default fetchLogout;
