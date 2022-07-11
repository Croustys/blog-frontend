import styles from "./Hamburger.module.css";
import { memo, useState } from "react";
import Menu from "./menu";

const Hamburger = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={styles.burger} onClick={() => setOpen((prev) => !prev)}>
      <svg
        width="62"
        height="62"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 3">
          <rect
            id="Rectangle 7"
            x="0.500122"
            y="0.499924"
            width="61"
            height="61"
            rx="30.5"
            fill="#1E2128"
            stroke="#FF0952"
          />
          <line
            id="Line 2"
            className={open ? styles.open2 : ""}
            x1="9"
            y1="30.5"
            x2="54"
            y2="30.5"
            stroke="#FCFEFF"
          />
          <line
            id="Line 1"
            className={open ? styles.open1 : ""}
            x1="9"
            y1="21.5"
            x2="54"
            y2="21.5"
            stroke="#FCFEFF"
          />
          <line
            id="Line 3"
            className={open ? styles.open3 : ""}
            x1="9"
            y1="40.5"
            x2="54"
            y2="40.5"
            stroke="#FCFEFF"
          />
        </g>
      </svg>
      {open && <Menu />}
    </div>
  );
};

export default memo(Hamburger);
