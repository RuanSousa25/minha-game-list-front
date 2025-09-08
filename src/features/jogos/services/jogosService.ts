import api from "../../../shared/services/Api";
import type { Page } from "../../../shared/types";
import type { Jogo } from "../types";

export async function listJogos(
  pageNumber: number,
  search: string
): Promise<Page<Jogo>> {
  const res = await api.get(`jogos?page=${pageNumber}&search=${search}`);
  console.log(res);
  return res.data;
}
export async function getJogo(id: number): Promise<Jogo> {
  const res = await api.get(`jogos/${id}`);
  return res.data;
}
