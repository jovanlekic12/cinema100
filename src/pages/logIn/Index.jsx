import Button from "../../components/Button";
import LogInForm from "./form/LogInForm";

function LogIn({ setToken }) {
  return (
    <main className="form__container">
      <div className="logo__div">
        <img src="../logo.png" alt="" className="logo__img" />
        <p className="logo__text">cinema 100</p>
      </div>
      <LogInForm setToken={setToken}></LogInForm>
    </main>
  );
}
export default LogIn;
