import styles from "../styles/Sugestao.module.css";
import type { SugestaoJogo } from "../types";
import { useNavigate } from "react-router-dom";

type UserSugestaoProp = {
  sugestao: SugestaoJogo;
};

export default function UserSugestao({ sugestao: sugestao }: UserSugestaoProp) {
  const navigate = useNavigate();
  const date = new Date(sugestao.dataSugestao);
  const formatado = date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return (
    <div className={styles.sugestaoaoContainer}>
      <p
        className={styles.sugestaoTitulo}
        onClick={() => navigate(`/jogo/${sugestao.jogoAprovadoId}`)}
      >
        {sugestao.nome}
      </p>
      <p>{sugestao.generos.join(", ")}</p>
      <p className={styles.sugestaoDataCriacao}>Escrita em: {formatado}</p>
    </div>
  );
}
