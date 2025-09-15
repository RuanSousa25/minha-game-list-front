import type React from "react";
import styles from "../styles/Paging.module.css";
import type { Page } from "../types";
import type { ReactNode } from "react";

interface PagingProps<T> {
  className?: string;
  page: Page<T>;
  search: string;
  renderItem: (item: T) => ReactNode;
  onPageChange: (pageNumber: number, search: string) => void;
}

export default function Paging<T>({
  className,
  page,
  search,
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
          onClick={() => onPageChange(page.page - 1, search)}
        >
          Anterior
        </button>

        <span>
          Página {page.page} de {page.totalPages}
        </span>

        <button
          disabled={page.page >= page.totalPages}
          onClick={() => onPageChange(page.page + 1, search)}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
