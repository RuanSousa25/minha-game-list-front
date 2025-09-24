export interface SugestaoJogo {
  id: number;
  jogoAprovadoId: number | null;
  usuarioId: number;
  nome: string;
  generos: string[];
  imagemCapa: string;
  imagemIcone: string;
  dataSugestao: string;
  aprovado: boolean;
}
