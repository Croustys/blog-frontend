import styles from "./Hamburger.module.css";
import { memo, useState } from "react";

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
            x="0.00012207"
            y="-7.62939e-05"
            width="62"
            height="62"
            rx="31"
            fill="#D9D9D9"
          />
          <line
            id="Line 2"
            className={open ? styles.open2 : ""}
            x1="9"
            y1="30.5"
            x2="54"
            y2="30.5"
            stroke="black"
          />
          <line
            id="Line 1"
            className={open ? styles.open1 : ""}
            x1="9"
            y1="21.5"
            x2="54"
            y2="21.5"
            stroke="black"
          />
          <line
            id="Line 3"
            className={open ? styles.open3 : ""}
            x1="9"
            y1="40.5"
            x2="54"
            y2="40.5"
            stroke="black"
          />
        </g>
      </svg>
    </div>
  );
};

export default memo(Hamburger);
