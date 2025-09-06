import api from "../../../shared/services/Api";
import type { Page } from "../../../shared/types";
import type { Genero } from "../types";

export async function listGeneros(
  pageNumber: number = 1,
  search: string = ""
): Promise<Page<Genero>> {
  const res = await api.get(`generos?search=${search}&page=${pageNumber}`);
  return res.data;
}
