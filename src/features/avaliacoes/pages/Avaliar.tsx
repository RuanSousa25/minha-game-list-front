import styles from "../styles/Avaliar.module.css";
import globalStyles from "../../../shared/styles/GlobalStyle.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import type { Jogo } from "../../jogos/types";
import { getJogo } from "../../jogos/services/jogosService";
import type { AvaliacaoForm, AvaliacaoType } from "../types";
import { PostAvaliacao } from "../services/avaliacoesService";

export default function AvaliarPage() {
  const { jogoId } = useParams() as { jogoId: string };
  const [jogo, setJogo] = useState<Jogo>();
  const [avaliacaoForm, setAvaliacaoForm] = useState<AvaliacaoForm>();

  const fetchJogo = async () => {
    const res = await getJogo(Number(jogoId));
    setJogo(res);
  };
  const handleAvaliacao = async () => {
    if (avaliacaoForm) {
      const res = await PostAvaliacao(avaliacaoForm);
      console.log(res);
    }
  };
  return <div className={styles.avaliarContainer}></div>;
}
