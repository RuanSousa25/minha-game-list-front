import styles from "../styles/AvaliacoesList.module.css";
import type { Page } from "../../../shared/types";
import type { AvaliacaoType } from "../types";
import Avaliacao from "./Avaliacao";
import { useEffect, useState } from "react";
import { ListAvaliacoesByJogoId } from "../services/avaliacoesService";
import Paging from "../../../shared/components/Paging";
type AvaliacoesListProps = {
  jogoId: number;
};

export default function AvaliacoesList({ jogoId }: AvaliacoesListProps) {
  const [avaliacoesPage, setAvaliacoesPage] = useState<Page<AvaliacaoType>>({
    items: [],
    page: 1,
    pageSize: 10,
    totalItems: 0,
    totalPages: 1,
  });

  const fetchAvaliacoes = async (pageNumber: number) => {
    const res = await ListAvaliacoesByJogoId(Number(jogoId), pageNumber);
    setAvaliacoesPage(res);
  };

  useEffect(() => {
    fetchAvaliacoes(1);
  }, [jogoId]);
  return (
    <div className={styles.avaliacoesListContainer}>
      <Paging
        className={styles.avaliacoesPaging}
        page={avaliacoesPage}
        onPageChange={fetchAvaliacoes}
        renderItem={(avaliacao) => (
          <Avaliacao avaliacao={avaliacao}></Avaliacao>
        )}
        search={""}
      />
    </div>
  );
}
