export interface SugestaoJogo {
  id: number;
  jogoAprovadoId: number | null;
  usuarioId: number;
  nome: string;
  generos: string[];
  imagemCapa: string;
  imagemIcon: string;
  dataSugestao: string;
  aprovado: boolean;
}
