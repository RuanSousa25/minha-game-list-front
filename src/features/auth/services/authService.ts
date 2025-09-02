import api from "../../../shared/services/Api";
import type { LoginResponse } from "../types";

export async function login(
  login: string,
  senha: string
): Promise<LoginResponse> {
  const res = await api.post("auth/login", { login, senha });
  return res.data;
}
export async function register(
  login: string,
  senha: string
): Promise<LoginResponse> {
  const res = await api.post("auth/register", { login, senha });
  return res.data;
}
export async function getUserById(userId: number) {
  const res = await api.get(`auth/user/${userId}`);
  console.log(res);
  return res.data;
}
