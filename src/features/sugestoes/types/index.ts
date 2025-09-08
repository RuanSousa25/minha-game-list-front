export interface SugestaoJogo {
  id: number;
  usuarioId: number;
  nome: string;
  generos: string[];
  imagemCapa: string;
  imagemIcon: string;
  DataSugestao: string;
  aprovado: boolean;
}
