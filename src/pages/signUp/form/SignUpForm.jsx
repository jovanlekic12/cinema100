import { useState } from "react";
import Button from "../../../components/Button";
import InputsDiv from "./inputs div/Index";
import { supabase } from "../../../supabase/supabase";
import { useNavigate } from "react-router";
import { SignUpUser } from "../../../api/signUp";

function SignUpForm(props) {
  let navigate = useNavigate();

  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }
  const errorMap = {
    name: "You must enter first name",
    lastName: "You must enter last name",
    email: "You must enter email",
    password: "You must enter password",
  };
  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    for (let key in formData) {
      if (formData[key] === "") {
        setError(errorMap[key]);
        return;
      }
    }

    const { error: err } = await SignUpUser(
      formData.email,
      formData.password,
      formData.name,
      formData.lastName
    );
    if (err) {
      setError(err.message);
      return;
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__heading">Sign Up</h2>
      <InputsDiv handleChange={handleChange} />
      <Button className="submit__btn">Sign Up</Button>
      {error && <p className="error__msg">{error}</p>}

      <div className="redirect__div">
        <p className="redirect__p">Already have an account?</p>
        <Button className="redirect__btn" onClick={() => navigate("/")}>
          Log In
        </Button>
      </div>
    </form>
  );
}
export default SignUpForm;
