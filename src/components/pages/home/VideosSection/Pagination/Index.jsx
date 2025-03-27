function Pagination({setCurrentPage}) {
  let pages = [];

  for (let i = 1; i <= 9; i++) {
    pages.push(i);
  }

  console.log(pages);

  return (
    <div className="pagination__div">
      {pages.map((page, index) => {
        return (
          <button className="pagination__btn" key={index} onClick={()=>setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
