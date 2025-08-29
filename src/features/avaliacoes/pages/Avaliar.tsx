import styles from "../styles/Avaliar.module.css";
import globalStyles from "../../../shared/styles/GlobalStyle.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, type ReactElement } from "react";
import type { Jogo } from "../../jogos/types";
import { getJogo } from "../../jogos/services/jogosService";
import type { AvaliacaoForm, AvaliacaoType } from "../types";
import { PostAvaliacao } from "../services/avaliacoesService";
import StarRatings from "react-star-ratings";

export default function AvaliarPage() {
  const navigate = useNavigate();
  const { jogoId } = useParams() as { jogoId: string };
  const [jogo, setJogo] = useState<Jogo>();
  const [avaliacaoForm, setAvaliacaoForm] = useState<AvaliacaoForm>({
    jogoId: Number(jogoId),
    nota: 0,
    opiniao: "",
  });

  const fetchJogo = async () => {
    const res = await getJogo(Number(jogoId));
    setJogo(res);
  };
  useEffect(() => {
    fetchJogo();
  }, [jogoId]);

  const handleChangeRating = (newRating: number) => {
    setAvaliacaoForm((prev) => ({
      ...prev,
      nota: newRating,
    }));
  };
  const handleChangeOpiniao = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAvaliacaoForm((prev) => ({
      ...prev,
      opiniao: e.target.value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (avaliacaoForm.opiniao.trim().length === 0) {
      return;
    }
    const res = await PostAvaliacao(avaliacaoForm);
    navigate(`/jogo/${jogoId}`);
  };
  return (
    <div className={styles.avaliarContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.avaliarJogoContainer}>
          <h2>
            Avaliar <strong>{jogo?.nome}</strong>
          </h2>
          <img src={jogo?.imagemCapa} />
        </div>
        <div className={styles.avaliarNotaContainer}>
          <StarRatings
            name="nota"
            rating={avaliacaoForm.nota}
            starRatedColor="#d4d400"
            starDimension="50px"
            starSpacing="5px"
            changeRating={handleChangeRating}
          ></StarRatings>
        </div>
        <div className={styles.avaliarOpiniaoContainer}>
          <p>Comente o que achou:</p>
          <textarea
            className={styles.textarea}
            value={avaliacaoForm.opiniao}
            onChange={handleChangeOpiniao}
          ></textarea>
        </div>
        <button type="submit" className={globalStyles.button}>
          Enviar Avaliação
        </button>
      </form>
    </div>
  );
}
