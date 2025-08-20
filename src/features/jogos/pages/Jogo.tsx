import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getJogo } from "../services/jogosService";
import type { Jogo } from "../types";
import type { Page } from "../../../shared/types";
import type { AvaliacaoType } from "../../avaliacoes/types";
import { ListAvaliacoesByJogoId } from "../../avaliacoes/services/avaliacoesService";
import AvaliacoesList from "../../avaliacoes/components/AvaliacoesList";
import StarRatings from "react-star-ratings";

export default function JogoPage() {
  const { jogoId } = useParams() as { jogoId: string };
  const [jogo, setJogo] = useState<Jogo>();
  const [avaliacoesPage, setAvaliacoesPage] = useState<Page<AvaliacaoType>>({
    items: [],
    page: 1,
    pageSize: 10,
    totalItems: 1,
    totalPages: 1,
  });

  useEffect(() => {
    fetchJogo();
  }, [jogoId]);

  const fetchJogo = async () => {
    console.log(jogoId);
    console.log(Number(jogoId));
    const res = await getJogo(Number(jogoId));
    console.log(res);
    setJogo(res);
    fetchAvaliacoes();
  };
  const fetchAvaliacoes = async () => {
    const res = await ListAvaliacoesByJogoId(Number(jogoId));
    setAvaliacoesPage(res);
  };
  return (
    <div>
      <div>
        <h2>{jogo?.nome}</h2>
        <img src={jogo?.imagemCapa} />
        <div>
          <StarRatings
            rating={jogo?.nota}
            starRatedColor="#d4d400"
            starDimension="35px"
            starSpacing="5px"
          ></StarRatings>
        </div>
      </div>
      <AvaliacoesList avaliacoesPage={avaliacoesPage}></AvaliacoesList>
    </div>
  );
}
