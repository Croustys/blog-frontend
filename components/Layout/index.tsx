import React, { ReactNode } from "react";
import { memo } from "react";
import Hamburger from "../Hamburger";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div>
      <Hamburger />
      {children}
    </div>
  );
};

export default memo(Layout);
