export interface AvaliacaoType {
  id: number;
  usuarioId: number;
  usuarioLogin: string;
  jogoId: number;
  jogoNome: string;
  nota: number;
  opiniao: string;
  data: string;
}
export interface AvaliacaoForm {
  jogoId: number;
  nota: number;
  opiniao: string;
}
