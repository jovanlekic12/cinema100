import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Button from "../../../../components/Button";
import { FillArray } from "../../../../utils/helpers";
import { moviesPerPage } from "../../../../utils/constants";
function Pagination({ setCurrentPage, currentPage, totalCount }) {
  let pages = [];
  FillArray(pages, totalCount, moviesPerPage);

  return (
    <div className="pagination__div">
      <Button
        color="grey"
        type="squared"
        variant="pagination"
        onClick={() => setCurrentPage((prev) => (prev === 1 ? 1 : prev - 1))}
      >
        <FaArrowLeftLong />
      </Button>
      {pages.map((page, index) => {
        return (
          <Button
            isActive={page === currentPage ? "active" : ""}
            color="grey"
            type="squared"
            variant="pagination"
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Button>
        );
      })}
      <Button
        color="grey"
        type="squared"
        variant="pagination"
        onClick={() => setCurrentPage((prev) => (prev === 9 ? 9 : prev + 1))}
      >
        <FaArrowRightLong />
      </Button>
    </div>
  );
}

export default Pagination;
