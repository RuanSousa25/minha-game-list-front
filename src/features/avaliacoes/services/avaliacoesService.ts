import api from "../../../shared/services/Api";
import type { Page } from "../../../shared/types";
import type { AvaliacaoType } from "../types";

export async function ListAvaliacoesByJogoId(
  jogoId: number
): Promise<Page<AvaliacaoType>> {
  const res = await api.get(`avaliacoes/jogo/${jogoId}`);
  console.log(res);
  return res.data;
}
export async function ListAvaliacoesByUsuarioId(
  usuarioId: number
): Promise<Page<AvaliacaoType>> {
  const res = await api.get(`avaliacoes/usuario/${usuarioId}`);
  console.log(res);
  return res.data;
}
