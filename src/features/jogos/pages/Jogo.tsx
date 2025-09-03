import styles from "../styles/Jogo.module.css";
import globalStyles from "../../../shared/styles/GlobalStyle.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getJogo } from "../services/jogosService";
import type { Jogo } from "../types";
import AvaliacoesList from "../../avaliacoes/components/AvaliacoesList";
import StarRatings from "react-star-ratings";

export default function JogoPage() {
  const navigate = useNavigate();
  const { jogoId } = useParams() as { jogoId: string };
  const [jogo, setJogo] = useState<Jogo>();
  useEffect(() => {
    fetchJogo();
  }, [jogoId]);

  const fetchJogo = async () => {
    const res = await getJogo(Number(jogoId));
    setJogo(res);
  };

  return (
    <div className={styles.avaliacoesJogoContainer}>
      <div className={styles.jogoContainer}>
        <div className={styles.jogoContainerContent}>
          <h2 className={styles.jogoTitulo}>{jogo?.nome}</h2>
          <div className={styles.jogoCapaContainer}>
            <img className={styles.jogoCapa} src={jogo?.imagemCapa} />
          </div>
          <div className={styles.jogoInfos}>
            <div className={styles.notaContainer}>
              <StarRatings
                rating={jogo?.nota}
                starRatedColor="#d4d400"
                starDimension="35px"
                starSpacing="5px"
              ></StarRatings>
            </div>
            <button
              className={globalStyles.button}
              onClick={() => navigate("avaliar")}
            >
              Avaliar
            </button>
          </div>
        </div>
      </div>
      <AvaliacoesList jogoId={Number(jogoId)}></AvaliacoesList>
    </div>
  );
}
