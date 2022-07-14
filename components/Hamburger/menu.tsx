import { memo } from "react";
import styles from "./Hamburger.module.css";
import Link from "next/link";

const Menu = ({ open }: { open: boolean }) => {
  if (!open) return null;
  return (
    <div className={`${styles.wrapper} ${open ? styles.animate_open : ""}`}>
      <ul>
        <li>
          <Link href="/feed">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/quote/create">
            <a>Create</a>
          </Link>
        </li>
        <li>
          <Link href="/logout">
            <a>Logout</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default memo(Menu);
