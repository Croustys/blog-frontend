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
    <div className={styles.test}>
      <Link href={`/quote/${id}`}>
        <div>
          {username} {title} {content}
        </div>
      </Link>
    </div>
  );
};

export default memo(Quote);
