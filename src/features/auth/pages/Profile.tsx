import styles from "../styles/Profile.module.css";
import globalStyles from "../../../shared/styles/GlobalStyle.module.css";
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
import { listSugestoesByUsuarioId } from "../../sugestoes/services/sugestoesService";
import type { SugestaoJogo } from "../../sugestoes/types";

export default function Profile() {
  const authState = useAuth();
  const { userId } = useParams() as { userId: string };
  const [user, setUser] = useState<User>();
  const [toggleAvaliacoes, setToggleAvaliacoes] = useState(true);
  const [avaliacoesPage, setAvaliacoesPage] = useState<Page<AvaliacaoType>>({
    items: [],
    page: 1,
    pageSize: 10,
    totalItems: 0,
    totalPages: 1,
  });
  const [sugestoesPage, setSugestoesPage] = useState<Page<SugestaoJogo>>({
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
  const fetchAvaliacoes = async (pageNumber: number, search: string) => {
    const res = await ListAvaliacoesByUsuarioId(
      Number(userId),
      pageNumber,
      search
    );
    setAvaliacoesPage(res);
  };
  const fetchSugestoes = async (
    pageNumber: number,
    search: string,
    usuarioId: string
  ) => {
    const res = await listSugestoesByUsuarioId(
      Number(usuarioId),
      pageNumber,
      search
    );
    console.log(res);
    setSugestoesPage(res);
  };

  useEffect(() => {
    fetchAvaliacoes(1, "");
    fetchSugestoes(1, "", userId);
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
          <ProfileCard
            cardText="Sugestões"
            cardValue={sugestoesPage.totalItems}
          />
        </span>
        <span>
          <button
            className={globalStyles.button2}
            onClick={() => setToggleAvaliacoes(true)}
          >
            Ver Avalições
          </button>
          <button
            className={globalStyles.button2}
            onClick={() => setToggleAvaliacoes(false)}
          >
            Ver Sugestões
          </button>
        </span>
      </div>
      <div className={styles.profileAvaliacoes}>
        {toggleAvaliacoes ? (
          <UserAvaliacoesList
            onPageChange={fetchAvaliacoes}
            page={avaliacoesPage}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
