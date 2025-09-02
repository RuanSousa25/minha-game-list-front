import styles from "../styles/AvaliacoesList.module.css";
import type { Page } from "../../../shared/types";
import type { AvaliacaoType } from "../types";

import UserAvaliacao from "./UserAvaliacao";
import Paging from "../../../shared/components/Paging";
type UserAvaliacoesListProps = {
  page: Page<AvaliacaoType>;
  onPageChange: (pageNumber: number) => void;
};

export default function UserAvaliacoesList({
  page,
  onPageChange,
}: UserAvaliacoesListProps) {
  return (
    <div className={styles.avaliacoesListContainer}>
      <p>Avaliações do Usuário</p>
      <Paging
        className={styles.avaliacoesPaging}
        page={page}
        renderItem={(avaliacao) => (
          <UserAvaliacao avaliacao={avaliacao}></UserAvaliacao>
        )}
        onPageChange={onPageChange}
      />
    </div>
  );
}
