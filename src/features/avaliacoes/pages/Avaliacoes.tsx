import { useEffect, useState } from "react";
import type { Avaliacao } from "../types";
import { ListAvaliacoesByJogoId } from "../services/avaliacoesService";
import { useParams } from "react-router-dom";

export default function Avaliacoes() {
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getAvaliacoes();
  }, []);

  const getAvaliacoes = async () => {
    const res = await ListAvaliacoesByJogoId(Number(id));
    setAvaliacoes(res);
  };

  return;
}
