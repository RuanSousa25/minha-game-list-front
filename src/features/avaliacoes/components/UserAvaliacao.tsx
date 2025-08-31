import styles from "../styles/Avaliacao.module.css";
import StarRatings from "react-star-ratings";
import type { AvaliacaoType } from "../types";

type UserAvaliacaoProp = {
  avaliacao: AvaliacaoType;
};

export default function UserAvaliacao({ avaliacao }: UserAvaliacaoProp) {
  const date = new Date(avaliacao.data);
  const formatado = date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return (
    <div className={styles.avaliacaoContainer}>
      <p className={styles.avaliacaoUsuarioLogin}>{avaliacao.jogoNome}</p>
      <StarRatings
        rating={avaliacao.nota}
        starRatedColor="#d4d400"
        starDimension="20px"
        starSpacing="5px"
      ></StarRatings>
      <p>{avaliacao.opiniao}</p>
      <p className={styles.avaliacaoDataCriacao}>Escrita em: {formatado}</p>
    </div>
  );
}
