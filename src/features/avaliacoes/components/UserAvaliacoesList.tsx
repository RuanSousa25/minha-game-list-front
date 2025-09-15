import styles from "../styles/AvaliacoesList.module.css";
import type { Page } from "../../../shared/types";
import type { AvaliacaoType } from "../types";

import UserAvaliacao from "./UserAvaliacao";
import Paging from "../../../shared/components/Paging";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useEffect, useState } from "react";
type UserAvaliacoesListProps = {
  page: Page<AvaliacaoType>;
  onPageChange: (pageNumber: number, search: string) => void;
};

export default function UserAvaliacoesList({
  page,
  onPageChange,
}: UserAvaliacoesListProps) {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    onPageChange(page.page, search);
  }, [search]);

  return (
    <div className={styles.avaliacoesListContainer}>
      <div>
        <p>Avaliações do Usuário</p>
        <div className={styles.searchBarContainer}>
          <div className={styles.searchBar}>
            <div className={styles.searchBarIconContainer}>
              <HiMagnifyingGlass />
            </div>
            <input value={search} onChange={handleSearch} />
          </div>
        </div>
      </div>
      <Paging
        className={styles.avaliacoesPaging}
        page={page}
        renderItem={(avaliacao) => (
          <UserAvaliacao avaliacao={avaliacao}></UserAvaliacao>
        )}
        search={search}
        onPageChange={onPageChange}
      />
    </div>
  );
}
