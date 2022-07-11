import * as React from "react";
import styles from "./Hamburger.module.css";
import { memo } from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={styles.wrapper}>
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
