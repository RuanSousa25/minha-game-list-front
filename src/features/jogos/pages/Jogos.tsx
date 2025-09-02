import { useEffect, useState } from "react";
import { listJogos } from "../services/jogosService";
import type { Jogo } from "../types";
import JogoCard from "../components/JogoCard";
import styles from "../styles/Jogos.module.css";
import type { Page } from "../../../shared/types";
import Paging from "../../../shared/components/Paging";

export default function Jogos() {
  const [jogosPaged, setJogosPaged] = useState<Page<Jogo>>({
    items: [],
    page: 1,
    pageSize: 10,
    totalItems: 1,
    totalPages: 1,
  });
  useEffect(() => {
    getJogos(1);
  }, []);

  const getJogos = async (pageNumber: number) => {
    const res = await listJogos(pageNumber);
    setJogosPaged(res);
  };

  return (
    <div className={styles.jogosContainer}>
      <Paging
        className={styles.jogosPaging}
        page={jogosPaged}
        onPageChange={getJogos}
        renderItem={(jogo) => <JogoCard jogo={jogo} />}
      />
    </div>
  );
}
