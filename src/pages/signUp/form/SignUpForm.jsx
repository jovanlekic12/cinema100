import { useState } from "react";
import Button from "../../../components/Button";
import InputsDiv from "./inputs div/Index";
import { supabase } from "../../../supabase/supabase";
import { useNavigate } from "react-router";

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

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    if (
      !formData.email ||
      !formData.password ||
      !formData.name ||
      !formData.lastName
    ) {
      setError("You have to fill up all fields!");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          name: formData.name,
          lastName: formData.lastName,
        },
      },
    });
    if (error) {
      setError(error.message);
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
