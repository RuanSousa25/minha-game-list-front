import { useEffect, useState } from "react";
import { listJogos } from "../services/jogosService";
import type { Jogo } from "../types";
import JogoCard from "../components/JogoCard";
import styles from "../styles/Jogos.module.css";

export default function Jogos() {
  const [jogos, setJogos] = useState<Jogo[]>([]);
  useEffect(() => {
    getJogos();
  }, []);

  const getJogos = async () => {
    const res = await listJogos();
    setJogos(res);
  };

  return (
    <div className={styles.jogosContainer}>
      {jogos.map((jogo) => (
        <JogoCard jogo={jogo}></JogoCard>
      ))}
    </div>
  );
}
