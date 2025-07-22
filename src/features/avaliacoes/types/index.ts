export interface Avaliacao {
  id: number;
  usuarioId: number;
  jogoId: number;
  nota: number;
  opiniao: string;
  data: Date;
}
