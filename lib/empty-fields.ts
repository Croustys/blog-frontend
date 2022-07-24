import type { LoginProps } from "../types";
interface isEmptyFieldProps extends LoginProps {
  username?: string;
}

const isAnyFieldsEmpty = ({ username, email, password }: isEmptyFieldProps) => {
  const isUsernameEmpty = username !== undefined ? username === "" : false;
  const isEmailEmpty = email === "";
  const isPasswordEmpty = password === "";

  return isUsernameEmpty || isEmailEmpty || isPasswordEmpty;
};

export default isAnyFieldsEmpty;
