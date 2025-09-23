import styles from "../styles/SugestoesList.module.css";
import type { Page } from "../../../shared/types";
import type { SugestaoJogo } from "../types";

import Paging from "../../../shared/components/Paging";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useEffect, useState } from "react";
import UserSugestao from "./UserSugestao";
type UserSugestoesListProps = {
  page: Page<SugestaoJogo>;
  onPageChange: (pageNumber: number, search: string) => void;
};

export default function UserSugestoesList({
  page,
  onPageChange,
}: UserSugestoesListProps) {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    onPageChange(page.page, search);
  }, [search]);

  return (
    <div className={styles.sugestoesListContainer}>
      <div>
        <p>Sugestões do Usuário</p>
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
        className={styles.sugestoesPaging}
        page={page}
        renderItem={(sugestao) => (
          <UserSugestao sugestao={sugestao}></UserSugestao>
        )}
        search={search}
        onPageChange={onPageChange}
      />
    </div>
  );
}
