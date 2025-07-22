import api from "../../../shared/services/Api";
import type { Avaliacao } from "../types";

export async function ListAvaliacoesByJogoId(
  jogoId: number
): Promise<Avaliacao[]> {
  const res = await api.get(`avaliacoes/jogo/${jogoId}`);
  console.log(res);
  return res.data;
}
export async function ListAvaliacoesByUsuarioId(
  usuarioId: number
): Promise<Avaliacao[]> {
  const res = await api.get(`avaliacoes/usuario/${usuarioId}`);
  console.log(res);
  return res.data;
}
