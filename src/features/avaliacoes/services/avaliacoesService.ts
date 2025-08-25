import api from "../../../shared/services/Api";
import type { Page } from "../../../shared/types";
import type { AvaliacaoType } from "../types";

export async function ListAvaliacoesByJogoId(
  jogoId: number,
  page: number
): Promise<Page<AvaliacaoType>> {
  const res = await api.get(`avaliacoes/jogo/${jogoId}?page=${page}`);
  console.log(res);
  return res.data;
}
export async function ListAvaliacoesByUsuarioId(
  usuarioId: number,
  page: number
): Promise<Page<AvaliacaoType>> {
  const res = await api.get(`avaliacoes/usuario/${usuarioId}?page=${page}`);
  console.log(res);
  return res.data;
}
