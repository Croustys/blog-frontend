import styles from "./Notification.module.css";
import { memo } from "react";

interface Props {
  msg: string;
}

const Notification = ({ msg }: Props) => {
  return (
    <div className={styles.notification_wrapper}>
      <div className={styles.notification_text}>{msg}</div>
    </div>
  );
};

export default memo(Notification);
