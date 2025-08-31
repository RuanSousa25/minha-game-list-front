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
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchAvaliacoes = async () => {
    const res = await ListAvaliacoesByUsuarioId(Number(userId), currentPage);
    setAvaliacoesPage(res);
  };

  useEffect(() => {
    fetchAvaliacoes();
  }, [currentPage]);
  return (
    <div className={styles.avaliacoesListContainer}>
      {avaliacoesPage.items.map((a) => (
        <UserAvaliacao avaliacao={a}></UserAvaliacao>
      ))}
    </div>
  );
}
