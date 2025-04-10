import { Link, useNavigate } from "react-router";
import { RiShutDownLine } from "react-icons/ri";
import Button from "./Button";
function Navbar({ token }) {
  let navigate = useNavigate();

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
        <nav className="navbar">
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
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
