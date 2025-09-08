import { useEffect, useState, type ReactEventHandler } from "react";
import { listJogos } from "../services/jogosService";
import type { Jogo } from "../types";
import JogoCard from "../components/JogoCard";
import styles from "../styles/Jogos.module.css";
import type { Page } from "../../../shared/types";
import Paging from "../../../shared/components/Paging";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Jogos() {
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [jogosPaged, setJogosPaged] = useState<Page<Jogo>>({
    items: [],
    page: 1,
    pageSize: 10,
    totalItems: 1,
    totalPages: 1,
  });
  useEffect(() => {
    getJogos(1, search);
  }, [page, search]);

  const getJogos = async (pageNumber: number, search: string) => {
    setLoading(true);
    const res = await listJogos(pageNumber, search);
    console.log(res);
    setJogosPaged(res);
    setLoading(false);
  };
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.jogosContainer}>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBar}>
          <div className={styles.searchBarIconContainer}>
            <HiMagnifyingGlass />
          </div>
          <input
            value={search}
            onChange={onSearchChange}
            type="text"
            placeholder="Pesquise seu jogo..."
          />
        </div>
      </div>
      {loading && <p>Carregando...</p>}
      {loading || (
        <Paging
          className={styles.jogosPaging}
          page={jogosPaged}
          onPageChange={setPage}
          renderItem={(jogo) => <JogoCard jogo={jogo} />}
        />
      )}
    </div>
  );
}
