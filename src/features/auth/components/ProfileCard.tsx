import styles from "../styles/ProfileCard.module.css";

interface ProfileCardProps {
  cardText: string;
  cardValue: number;
}

export default function ProfileCard({ cardText, cardValue }: ProfileCardProps) {
  return (
    <div className={styles.profileCard}>
      <p className={styles.cardValue}>{cardValue}</p>
      <p className={styles.cardText}>{cardText}</p>
    </div>
  );
}
