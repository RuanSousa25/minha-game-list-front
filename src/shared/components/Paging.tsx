import type React from "react";
import styles from "../styles/Paging.module.css";
import type { Page } from "../types";
import type { ReactNode } from "react";

interface PagingProps<T> {
  className?: string;
  page: Page<T>;
  renderItem: (item: T) => ReactNode;
  onPageChange: (pageNumber: number) => void;
}

export default function Paging<T>({
  className,
  page,
  renderItem,
  onPageChange,
}: PagingProps<T>) {
  return (
    <div className={styles.pagingContainer}>
      <div className={className}>
        {page.items.map((item) => (
          <>{renderItem(item)}</>
        ))}
      </div>
      <div className={styles.pagingController}>
        <button
          disabled={page.page <= 1}
          onClick={() => onPageChange(page.page - 1)}
        >
          Anterior
        </button>

        <span>
          Página {page.page} de {page.totalPages}
        </span>

        <button
          disabled={page.page >= page.totalPages}
          onClick={() => onPageChange(page.page + 1)}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
