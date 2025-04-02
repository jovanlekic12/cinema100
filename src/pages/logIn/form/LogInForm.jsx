import { useNavigate } from "react-router";
import Button from "../../../components/Button";
import InputsDiv from "./inputs div/Index";
import { supabase } from "../../../supabase/supabase";
import { useState } from "react";
import { logInUser } from "../../../api/login";
function LogInForm({ setToken }) {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const logIn = async () => {
    const data = await logInUser(formData.email, formData.password);
    setToken(data);
  };

  function handleChange(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    logIn();
    navigate("/home");
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__heading">Log In</h2>
      <InputsDiv handleChange={handleChange} />
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
