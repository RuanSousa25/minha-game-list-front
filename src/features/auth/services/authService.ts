import api from "../../../shared/services/Api";
import type { LoginResponse } from "../types";

export async function login(
  login: string,
  senha: string
): Promise<LoginResponse> {
  const res = await api.post("auth/login", { login, senha });
  return res.data;
}
