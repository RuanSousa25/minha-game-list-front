import api from "../../../shared/services/Api";
import type { Page } from "../../../shared/types";
import type { Jogo } from "../types";

export async function listJogos(): Promise<Page<Jogo>> {
  const res = await api.get("jogos");
  console.log(res);
  return res.data;
}
export async function getJogo(id: number): Promise<Jogo> {
  const res = await api.get(`jogos/${id}`);
  return res.data;
}
