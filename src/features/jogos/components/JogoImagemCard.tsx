import { useState } from "react";
import styles from "../styles/JogoCard.module.css";

interface JogoImagemProps {
  src: string;
  alt: string;
}
export default function JogoImagemCard({ src, alt }: JogoImagemProps) {
  const [imageSrc, setImageSrc] = useState(src);
  return (
    <img
      src={imageSrc}
      alt={alt}
      onError={(e) =>
        setImageSrc(
          `data:image/svg+xml;base64,${btoa(
            `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="215"><rect width="100%" height="100%" fill="#f7f7f7"/></svg>`
          )}`
        )
      }
      className={styles.jogoImagemCard}
    ></img>
  );
}
