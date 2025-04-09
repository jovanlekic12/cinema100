import H4 from "../../../../components/h4";

function TrendingHeader({ moveIndex }) {
  const array = ["", "", "", ""];

  return (
    <div className="trending__header">
      <H4>Currently trending</H4>
      <div className="trending__selection__div">
        {array.map((item, index) => {
          return (
            <div
              key={index}
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
