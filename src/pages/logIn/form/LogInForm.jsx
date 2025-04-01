import { useNavigate } from "react-router";
import Button from "../../../components/Button";

function LogInForm(props) {
  let navigate = useNavigate();

  return (
    <form className="form">
      <h2 className="form__heading">Log In</h2>
      <div className="form__inputs__div">
        <input type="text" className="form__input" placeholder="Email" />
        <input type="password" className="form__input" placeholder="Password" />
      </div>
      <Button className="submit__btn">Log In</Button>
      <div className="redirect__div">
        <p className="redirect__p">Don't have an account?</p>
        <Button className="redirect__btn" onClick={() => navigate("/signUp")}>
          Sign up
        </Button>
      </div>
    </form>
  );
}

export default LogInForm;
