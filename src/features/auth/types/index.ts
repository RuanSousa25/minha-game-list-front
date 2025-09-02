export interface LoginResponse {
  accessToken: string;
}

export interface DotNetToken {
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string;
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
  exp: number;
}

export type User = {
  id: string;
  login: string;
  role: string;
};
