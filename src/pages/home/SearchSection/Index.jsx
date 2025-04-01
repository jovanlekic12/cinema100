import { CiSearch } from "react-icons/ci";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import Button from "../../../components/Button";
import { fetchCategories } from "../../../api/movies";
import { useEffect, useState } from "react";
function SearchSection(props) {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const data = await fetchCategories();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  console.log(categories);

  return (
    <section className="search__section">
      <div className="search__div">
        <input type="text" className="search__input" placeholder="Search..." />
        <CiSearch className="searchbar__icon"></CiSearch>
      </div>
      <div className="bookmarks__div">
        <select className="select__input" value="All">
          {categories &&
            categories.map((category) => {
              return <option value={category.name}>{category.name}</option>;
            })}
        </select>
        <div className="boomarks__btns__div">
          <Button className="bookmarks__btn">
            <PiBookmarkSimpleFill className="bookmarks__icon" />
          </Button>
          <Button className="bookmarks__btn">
            <IoHome className="bookmarks__icon" />
          </Button>
        </div>
      </div>
    </section>
  );
}
export default SearchSection;
