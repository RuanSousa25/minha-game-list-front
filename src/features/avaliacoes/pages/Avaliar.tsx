import styles from "../styles/Avaliar.module.css";
import globalStyles from "../../../shared/styles/GlobalStyle.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Jogo } from "../../jogos/types";
import { getJogo } from "../../jogos/services/jogosService";
import type { AvaliacaoForm } from "../types";
import { PostAvaliacao } from "../services/avaliacoesService";
import StarRatings from "react-star-ratings";
import ErrorToast from "../../../shared/components/ErrorToast";
import { useAuth } from "../../auth/context/AuthContext";

export default function AvaliarPage() {
  const navigate = useNavigate();
  const { state } = useAuth();
  const { jogoId } = useParams() as { jogoId: string };
  const [jogo, setJogo] = useState<Jogo>();
  const [avaliacaoForm, setAvaliacaoForm] = useState<AvaliacaoForm>({
    jogoId: Number(jogoId),
    nota: 0,
    opiniao: "",
  });
  const [error, setError] = useState<string | null>(null);

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
    if (!state.isAuthenticated) {
      setError("Você precisa realizar login para enviar uma avaliação.");
    }
    if (avaliacaoForm.opiniao.trim().length === 0) {
      setError("Você precisa escrever um texto para a avaliação.");
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
      {error && <ErrorToast message={error} onClose={() => setError(null)} />}
    </div>
  );
}
