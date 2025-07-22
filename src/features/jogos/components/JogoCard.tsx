import type { Jogo } from "../types";
import StarRatings from "react-star-ratings";
import styles from "../styles/JogoCard.module.css";
import JogoImagemCard from "./JogoImagemCard";
interface Props {
  jogo: Jogo;
}

export default function JogoCard({ jogo }: Props) {
  return (
    <div className={styles.jogoCard}>
      <h2 className={styles.jogoTituloCard}>{jogo.nome}</h2>
      <JogoImagemCard
        src={jogo.imagens[0]}
        alt={"imagem de capa do jogo " + jogo.nome}
      />
      <span className={styles.notaContainerCard}>
        <StarRatings
          rating={jogo.nota}
          starRatedColor="#d4d400   "
          starDimension="20px"
          starSpacing="5px"
        ></StarRatings>
      </span>

      <div className={styles.generosContainerCard}>
        {jogo.generos.map((g, i) => (
          <span key={i} className={styles.generoChip}>
            {g}
          </span>
        ))}
      </div>

      <span className={styles.buttonsCard}>
        <button className={styles.buttonCard}>Avaliações</button>
      </span>
    </div>
  );
}
