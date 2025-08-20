import type { Page } from "../../../shared/types";
import type { AvaliacaoType } from "../types";
import Avaliacao from "./Avaliacao";
type AvaliacoesListProps = {
  avaliacoesPage: Page<AvaliacaoType>;
};

export default function AvaliacoesList({
  avaliacoesPage,
}: AvaliacoesListProps) {
  return (
    <div>
      {avaliacoesPage.items.map((a) => (
        <Avaliacao avaliacao={a}></Avaliacao>
      ))}
    </div>
  );
}
