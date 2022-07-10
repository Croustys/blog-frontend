import Link from "next/link";
import React from "react";
import { memo } from "react";
import styles from "./Quote.module.css";

interface Props {
  id: string;
  username: string;
  title: string;
  content: string;
}

const Quote = ({ id, username, title, content }: Props) => {
  return (
    <div className={styles.quote_wrapper}>
      <Link href={`/quote/${id}`}>
        <div className={styles.quote_link_wrapper}>
          <div className={styles.username}>{username}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.content}>{content}</div>
        </div>
      </Link>
    </div>
  );
};

export default memo(Quote);
