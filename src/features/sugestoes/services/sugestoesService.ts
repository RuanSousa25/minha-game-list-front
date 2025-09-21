import api from "../../../shared/services/Api";
import type { Page } from "../../../shared/types";
import type { SugestaoJogo } from "../types";

export async function listSugestoes(
  pageNumber: number = 1,
  search: string = ""
): Promise<Page<SugestaoJogo>> {
  const res = await api.get(`sugerirjogo?search=${search}&page=${pageNumber}`);
  return res.data;
}
export async function listSugestoesByUsuarioId(
  userId: number,
  pageNumber: number = 1,
  search: string = ""
): Promise<Page<SugestaoJogo>> {
  const res = await api.get(
    `sugerirjogo/${userId}?search=${search}&page=${pageNumber}`
  );
  return res.data;
}
