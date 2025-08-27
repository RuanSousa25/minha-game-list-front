import styles from "../styles/AvaliacoesList.module.css";
import type { Page } from "../../../shared/types";
import type { AvaliacaoType } from "../types";
import Avaliacao from "./Avaliacao";
import { useEffect, useState } from "react";
import { ListAvaliacoesByJogoId } from "../services/avaliacoesService";
type AvaliacoesListProps = {
  jogoId: number;
};

export default function AvaliacoesList({ jogoId }: AvaliacoesListProps) {
  const [avaliacoesPage, setAvaliacoesPage] = useState<Page<AvaliacaoType>>({
    items: [],
    page: 1,
    pageSize: 10,
    totalItems: 1,
    totalPages: 1,
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchAvaliacoes = async () => {
    const res = await ListAvaliacoesByJogoId(Number(jogoId), currentPage);
    setAvaliacoesPage(res);
  };

  useEffect(() => {
    fetchAvaliacoes();
  }, [currentPage]);
  return (
    <div className={styles.avaliacoesListContainer}>
      {avaliacoesPage.items.map((a) => (
        <Avaliacao avaliacao={a}></Avaliacao>
      ))}
    </div>
  );
}
