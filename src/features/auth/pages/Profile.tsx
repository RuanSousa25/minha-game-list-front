import styles from "../styles/Profile.module.css";
import UserAvaliacoesList from "../../avaliacoes/components/UserAvaliacoesList";
import { useAuth } from "../context/AuthContext";
import ProfileCard from "../components/ProfileCard";
import { useParams } from "react-router-dom";
import { ListAvaliacoesByUsuarioId } from "../../avaliacoes/services/avaliacoesService";
import { useEffect, useState } from "react";
import type { Page } from "../../../shared/types";
import type { AvaliacaoType } from "../../avaliacoes/types";
import type { User } from "../types";
import { getUserById } from "../services/authService";

export default function Profile() {
  const authState = useAuth();
  const { userId } = useParams() as { userId: string };
  const [user, setUser] = useState<User>();
  const [avaliacoesPage, setAvaliacoesPage] = useState<Page<AvaliacaoType>>({
    items: [],
    page: 1,
    pageSize: 10,
    totalItems: 0,
    totalPages: 1,
  });

  const fetchUser = async () => {
    const res = await getUserById(Number(userId));
    setUser(res);
  };
  const fetchAvaliacoes = async (pageNumber: number) => {
    const res = await ListAvaliacoesByUsuarioId(Number(userId), pageNumber);
    setAvaliacoesPage(res);
  };

  useEffect(() => {
    fetchAvaliacoes(1);
    fetchUser();
  }, [userId]);

  console.log(authState);
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileInfos}>
        <h2>{user?.login}</h2>
        <p>acesso: {user?.role}</p>
        <span>
          <ProfileCard
            cardText="Avaliações"
            cardValue={avaliacoesPage.totalItems}
          />
          <ProfileCard cardText="Sugestões" cardValue={0} />
        </span>
      </div>
      <div className={styles.profileAvaliacoes}>
        <UserAvaliacoesList
          onPageChange={fetchAvaliacoes}
          page={avaliacoesPage}
        />
      </div>
    </div>
  );
}
