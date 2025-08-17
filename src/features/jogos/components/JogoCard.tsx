import type { Jogo } from "../types";
import StarRatings from "react-star-ratings";
import styles from "../styles/JogoCard.module.css";
import JogoImagemCard from "./JogoImagemCard";
import { useNavigate } from "react-router-dom";
interface Props {
  jogo: Jogo;
}

export default function JogoCard({ jogo }: Props) {
  const navigate = useNavigate();
  return (
    <div className={styles.jogoCard}>
      <h2 className={styles.jogoTituloCard}>{jogo.nome}</h2>
      <JogoImagemCard
        src={jogo.imagemCapa}
        alt={"imagem de capa do jogo " + jogo.nome}
      />
      <span className={styles.notaContainerCard}>
        <StarRatings
          rating={jogo.nota}
          starRatedColor="#d4d400   "
          starDimension="20px"
          starSpacing="5px"
        ></StarRatings>{" "}
        <div className={styles.avaliacoesCountContainer}>
          ({jogo.avaliacoesCount})
        </div>
      </span>
      <span className={styles.buttonsCard}>
        <button
          onClick={() => navigate(`jogo/${jogo.id}`)}
          className={styles.buttonCard}
        >
          Avaliações
        </button>
      </span>
    </div>
  );
}
