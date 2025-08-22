import styles from "../styles/AvaliacoesList.module.css";
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
    <div className={styles.avaliacoesListContainer}>
      {avaliacoesPage.items.map((a) => (
        <Avaliacao avaliacao={a}></Avaliacao>
      ))}
    </div>
  );
}
