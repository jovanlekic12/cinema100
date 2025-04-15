import { CiSearch } from "react-icons/ci";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import Button from "../../../components/Button";
import { fetchCategories } from "../../../api/movies";
import { useFetchData } from "../../../api/useFetchData";
import debounce from "lodash.debounce";
import { useCallback } from "react";
function SearchSection({
  setSearchTerm,
  setCategory,
  category,
  displayedMovies,
  setDisplayedMovies,
}) {
  const { data: categories } = useFetchData(fetchCategories);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const debouncedSearch = useCallback(debounce(handleSearchChange, 300), []);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <section className="search__section">
      <div className="search__div">
        <input
          onChange={debouncedSearch}
          type="text"
          className="search__input"
          placeholder="Search..."
        />
        <CiSearch className="searchbar__icon"></CiSearch>
      </div>
      <div className="bookmarks__div">
        <select
          className="select__input"
          value={category}
          onChange={handleCategoryChange}
        >
          {categories &&
            categories.map((category) => {
              return (
                <option value={category.name} key={category.name}>
                  {category.name}
                </option>
              );
            })}
        </select>
        <div className="bookmarks__btns__div">
          <Button
            variant="transparent"
            onClick={() => setDisplayedMovies("Bookmarks")}
          >
            <PiBookmarkSimpleFill
              className={
                displayedMovies === "Bookmarks"
                  ? "bookmarks__icon bookmarks__icon__active"
                  : "bookmarks__icon"
              }
            />
          </Button>
          <Button
            variant="transparent"
            onClick={() => setDisplayedMovies("Home")}
          >
            <IoHome
              className={
                displayedMovies === "Home"
                  ? "bookmarks__icon bookmarks__icon__active"
                  : "bookmarks__icon"
              }
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
export default SearchSection;
