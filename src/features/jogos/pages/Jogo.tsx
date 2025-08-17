import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getJogo } from "../services/jogosService";
import type { Jogo } from "../types";

export default function JogoPage() {
  const { jogoId } = useParams() as { jogoId: string };
  const [jogo, setJogo] = useState<Jogo>();

  useEffect(() => {
    fetchJogo();
  }, [jogoId]);

  const fetchJogo = async () => {
    console.log(jogoId);
    console.log(Number(jogoId));
    const res = await getJogo(Number(jogoId));
    console.log(res);
    setJogo(res);
  };

  return <div>{jogo?.nome}</div>;
}
