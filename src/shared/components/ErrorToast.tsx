import styles from "../styles/ErrorToast.module.css";
import { useEffect } from "react";

interface ErrorToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export default function ErrorToast({
  message,
  onClose,
  duration = 3000,
}: ErrorToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return <div className={styles.toast}>{message}</div>;
}
