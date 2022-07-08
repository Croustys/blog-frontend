import styles from "./Notification.module.css";
import { memo, useState, useEffect } from "react";

interface Props {
  msg: string;
}

const Notification = ({ msg }: Props) => {
  const [show, setShow] = useState<boolean>(true);
  const [display, setDisplay] = useState<boolean>(true);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (!display) return null;
  return (
    <div
      className={`${styles.notification_wrapper} ${show ? "" : styles.fadeOut}`}
      onTransitionEnd={() => setDisplay(false)}
    >
      <div className={styles.notification_text}>{msg}</div>
    </div>
  );
};

export default memo(Notification);
