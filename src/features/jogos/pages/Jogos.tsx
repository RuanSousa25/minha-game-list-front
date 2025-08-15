import { useEffect, useState } from "react";
import { listJogos } from "../services/jogosService";
import type { Jogo } from "../types";
import JogoCard from "../components/JogoCard";
import styles from "../styles/Jogos.module.css";
import type { Page } from "../../../shared/types";

export default function Jogos() {
  const [jogosPaged, setJogosPaged] = useState<Page<Jogo>>({
    items: [],
    page: 1,
    pageSize: 10,
    totalItems: 1,
    totalPages: 1,
  });
  useEffect(() => {
    getJogos();
  }, []);

  const getJogos = async () => {
    const res = await listJogos();
    setJogosPaged(res);
  };

  return (
    <div className={styles.jogosContainer}>
      {jogosPaged.items.map((jogo) => (
        <JogoCard jogo={jogo}></JogoCard>
      ))}
    </div>
  );
}
