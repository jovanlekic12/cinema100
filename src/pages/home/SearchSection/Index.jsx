import { CiSearch } from "react-icons/ci";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
function SearchSection(props) {
  return (
    <section className="search__section">
      <div className="search__div">
        <input type="text" className="search__input" placeholder="Search..." />
        <CiSearch className="searchbar__icon"></CiSearch>
      </div>
      <div className="bookmarks__div">
        <select className="select__input">All</select>
        <div className="boomarks__btns__div">
          <button className="bookmarks__btn">
            <PiBookmarkSimpleFill className="bookmarks__icon" />
          </button>
          <button className="bookmarks__btn">
            <IoHome className="bookmarks__icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
export default SearchSection;
