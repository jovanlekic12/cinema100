function TrendingHeader({ moveIndex }) {
  const array = ["", "", "", ""];

  return (
    <div className="trending__header">
      <h4 className="trending__heading">Currently trending</h4>
      <div className="trending__selection__div">
        {array.map((item, index) => {
          return (
            <div
              className={
                index === moveIndex
                  ? "trending__selection active__selection"
                  : "trending__selection"
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
}
export default TrendingHeader;
