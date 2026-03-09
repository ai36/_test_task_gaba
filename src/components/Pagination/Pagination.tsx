import { ITEMS_PER_PAGE } from "@/constants";
import type { TPaginationItem } from "@/types";
import s from "./pagination.module.css";

const getPaginationItems = (
  currentPage: number,
  totalPages: number,
): TPaginationItem[] => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  if (currentPage <= 3) {
    return [1, 2, 3, 4, "...", totalPages];
  }
  if (currentPage >= totalPages - 2) {
    return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export const Pagination = ({
  totalItems,
  currentPage,
  onPageChange,
}: {totalItems: number, currentPage: number, onPageChange: (page: number) => void}) => {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  if (totalPages <= 1) return null;

  const items = getPaginationItems(currentPage, totalPages);

  return (
    <nav className={s.pagination} aria-label="Пагинация">
      <ul className={s.list}>
        {items.map((item, index) =>
          item === "..." ? (
            <li key={`ellipsis-${index}`} className={s.ellipsis} aria-hidden>
              &hellip;
            </li>
          ) : (
            <li key={item}>
              <button
                className={s.btn}
                type="button"
                aria-current={item === currentPage ? "page" : undefined}
                onClick={() => onPageChange(item)}
              >
                {item}
              </button>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
};
