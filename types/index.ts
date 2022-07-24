export interface iQuote {
  id: string;
  username: string;
  title: string;
  content: string;
}
export interface LoginProps {
  email: string;
  password: string;
}
export interface RegisterProps extends LoginProps {
  username: string;
}
