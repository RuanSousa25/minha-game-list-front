import api from "../../../shared/services/Api";
import type { Page } from "../../../shared/types";
import type { AvaliacaoForm, AvaliacaoType } from "../types";

export async function ListAvaliacoesByJogoId(
  jogoId: number,
  page: number
): Promise<Page<AvaliacaoType>> {
  const res = await api.get(`avaliacoes/jogo/${jogoId}?page=${page}`);
  return res.data;
}
export async function ListAvaliacoesByUsuarioId(
  usuarioId: number,
  page: number,
  search: string
): Promise<Page<AvaliacaoType>> {
  const res = await api.get(
    `avaliacoes/usuario/${usuarioId}?page=${page}&search=${search}`
  );
  return res.data;
}
export async function PostAvaliacao(form: AvaliacaoForm) {
  const res = await api.post(`avaliacoes/jogo`, form, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
}
