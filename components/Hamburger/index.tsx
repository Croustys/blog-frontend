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
    </div>
  );
};

export default memo(Hamburger);

/* <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 3">
<rect id="Rectangle 7" x="0.500122" y="0.499924" width="61" height="61" rx="30.5" fill="#1E2128" stroke="#FF0952"/>
<line id="Line 1" x1="14.6654" y1="45.7393" x2="48.107" y2="15.6284" stroke="white"/>
<line id="Line 3" x1="15.3346" y1="15.6284" x2="48.7761" y2="45.7393" stroke="white"/>
</g>
</svg>
 */
