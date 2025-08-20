import StarRatings from "react-star-ratings";
import type { AvaliacaoType } from "../types";

type AvaliacaoProp = {
  avaliacao: AvaliacaoType;
};

export default function Avaliacao({ avaliacao }: AvaliacaoProp) {
  const date = new Date(avaliacao.data);
  const formatado = date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return (
    <div>
      <p>{avaliacao.usuarioLogin}</p>
      <StarRatings
        rating={avaliacao.nota}
        starRatedColor="#d4d400"
        starDimension="20px"
        starSpacing="5px"
      ></StarRatings>
      <p>{avaliacao.opiniao}</p>
      <p>{formatado}</p>
    </div>
  );
}
