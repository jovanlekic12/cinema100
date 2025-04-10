import { Link, useNavigate } from "react-router";
import { RiShutDownLine } from "react-icons/ri";
import Button from "./Button";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { ImCross } from "react-icons/im";
function Navbar({ token }) {
  let navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }

  return (
    <header className="header">
      <div className="inner__header">
        <Link className="logo__link logo__div" to="/home">
          <img src="./logo.png" alt="" className="header__logo__img" />
          <p className="header__logo__text">cinema 100</p>
        </Link>
        <nav className={isOpened ? "navbar navbar__mobile" : "navbar"}>
          <h3 className="navbar__msg">
            Welcome back,{" "}
            {token.user.is_anonymous ? "Guest" : token.user.user_metadata.name}
          </h3>
          <div className="logout__div">
            <h3 className="navbar__msg">Log out</h3>
            <Button onClick={handleLogout} className="logout__btn">
              <RiShutDownLine className="logout__icon" />
            </Button>
          </div>
          <ImCross
            className="x__icon"
            onClick={() => setIsOpened(false)}
          ></ImCross>
        </nav>
        <FaBars
          className="sidebar__btn"
          onClick={() => setIsOpened(true)}
        ></FaBars>
      </div>
    </header>
  );
}
export default Navbar;
