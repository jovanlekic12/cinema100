import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

function Pagination({ setCurrentPage, currentPage }) {
  let pages = [];

  //prebaciti ovu funkciju u folder utils/helpers.js
  for (let i = 1; i <= 9; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination__div">
      <button
        className="pagination__btn pagination__arrow"
        onClick={() => setCurrentPage((prev) => (prev === 1 ? 1 : prev - 1))}
      >
        <FaArrowLeftLong />
      </button>
      {pages.map((page, index) => {
        return (
          <button
            className={
              page === currentPage
                ? "pagination__btn active__btn"
                : "pagination__btn"
            }
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
      <button
        className="pagination__btn pagination__arrow"
        onClick={() => setCurrentPage((prev) => (prev === 9 ? 9 : prev + 1))}
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
}

export default Pagination;
