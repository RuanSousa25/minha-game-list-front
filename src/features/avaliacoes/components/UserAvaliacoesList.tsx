import styles from "../styles/AvaliacoesList.module.css";
import type { Page } from "../../../shared/types";
import type { AvaliacaoType } from "../types";
import Avaliacao from "./Avaliacao";
import { useEffect, useState } from "react";
import {
  ListAvaliacoesByJogoId,
  ListAvaliacoesByUsuarioId,
} from "../services/avaliacoesService";
import UserAvaliacao from "./UserAvaliacao";
import Paging from "../../../shared/components/Paging";
type UserAvaliacoesListProps = {
  userId: number;
};

export default function UserAvaliacoesList({
  userId,
}: UserAvaliacoesListProps) {
  const [avaliacoesPage, setAvaliacoesPage] = useState<Page<AvaliacaoType>>({
    items: [],
    page: 1,
    pageSize: 10,
    totalItems: 1,
    totalPages: 1,
  });

  const fetchAvaliacoes = async (pageNumber: number) => {
    const res = await ListAvaliacoesByUsuarioId(Number(userId), pageNumber);
    setAvaliacoesPage(res);
  };

  useEffect(() => {
    fetchAvaliacoes(1);
  }, [userId]);
  return (
    <div className={styles.avaliacoesListContainer}>
      <Paging
        className={styles.avaliacoesPaging}
        page={avaliacoesPage}
        renderItem={(avaliacao) => (
          <UserAvaliacao avaliacao={avaliacao}></UserAvaliacao>
        )}
        onPageChange={fetchAvaliacoes}
      />
    </div>
  );
}
