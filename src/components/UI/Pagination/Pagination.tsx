import { Dispatch, FC, SetStateAction, useState } from "react";
import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  total_pages: number;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}

export const Pagination: FC<PaginationProps> = ({
  total_pages,
  pageNumber,
  setPageNumber,
}) => {
  const [currentPage, setCurrentPage] = useState(pageNumber - 1);

  const handleClick = (selected: number) => {
    setCurrentPage(selected);
    setPageNumber(selected + 1);
  };

  return (
    <div className={styles.pagination}>
      <ReactPaginate
        initialPage={currentPage}
        pageCount={total_pages}
        previousLabel="< "
        nextLabel=" >"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        activeClassName={styles.pagination_item_active}
        onPageChange={(e) => handleClick(e.selected)}
      />
    </div>
  );
};
