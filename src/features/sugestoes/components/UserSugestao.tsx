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

  console.log(sugestao);
  return (
    <div className={styles.sugestaoaoContainer}>
      <div className={styles.jogoApresentação}>
        <img src={sugestao.imagemIcone}></img>
        <p
          className={styles.sugestaoTitulo}
          onClick={() => navigate(`/jogo/${sugestao.jogoAprovadoId}`)}
        >
          {sugestao.nome}
        </p>
      </div>
      <div className={styles.jogoGeneros}>
        {sugestao.generos.map((s) => (
          <span className={styles.generoChip}>
            <p>{s}</p>
          </span>
        ))}
      </div>

      <p className={styles.sugestaoDataCriacao}>Escrita em: {formatado}</p>
    </div>
  );
}
