import styles from "../styles/Profile.module.css";
import UserAvaliacoesList from "../../avaliacoes/components/UserAvaliacoesList";
import { useAuth } from "../context/AuthContext";
import ProfileCard from "../components/ProfileCard";

export default function Profile() {
  const authState = useAuth();

  console.log(authState);
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileInfos}>
        <h2>{authState.state.user?.name}</h2>
        <p>acesso: {authState.state.user?.role}</p>
        <span>
          <ProfileCard cardText="Avaliações" cardValue={0} />
          <ProfileCard cardText="Sugestões" cardValue={0} />
        </span>
      </div>
      <div className={styles.profileAvaliacoes}>
        <UserAvaliacoesList userId={Number(authState.state.user?.id)} />
      </div>
    </div>
  );
}
