import styles from "../styles/JogoCard.module.css";

interface JogoImagemProps {
  src: string;
  alt: string;
}
export default function JogoImagemCard({ src, alt }: JogoImagemProps) {
  return <img src={src} alt={alt} className={styles.jogoImagemCard}></img>;
}
