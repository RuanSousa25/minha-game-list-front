import api from "../../../shared/services/Api";
import type { Jogo } from "../types";

export async function listJogos(): Promise<Jogo[]> {
  const res = await api.get("jogos");
  console.log(res);
  return res.data;
}
