import { useNavigate } from "react-router";
import Button from "../../../components/Button";
import InputsDiv from "./inputs div/Index";
import { supabase } from "../../../supabase/supabase";
import { useState } from "react";
import { logInUser } from "../../../api/login";
function LogInForm({ setToken, token }) {
  let navigate = useNavigate();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function logInAsGuest() {
    const { data, error } = await supabase.auth.signInAnonymously();
    if (error) {
      setError(error);
      return;
    }
    setToken(data);
    navigate("/home");
  }

  function handleChange(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
    console.log(formData);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    const { data, error } = await logInUser(formData.email, formData.password);
    if (error) {
      setError(error.message);
      return;
    }
    setToken(data);
    navigate("/home");
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2 className="form__heading">Log In</h2>
        <InputsDiv handleChange={handleChange} />
        <Button type="submit">Log In</Button>
        {error && <p className="error__msg">{error}</p>}
        <div className="redirect__div">
          <p className="redirect__p">Don't have an account?</p>
          <Button type="redirect" onClick={() => navigate("/signUp")}>
            Sign up
          </Button>
        </div>
      </form>
      <div className="redirect__div">
        <p className="redirect__p">Or,</p>
        <Button type="redirect" onClick={() => logInAsGuest()}>
          Log In as a guest
        </Button>
      </div>
    </div>
  );
}

export default LogInForm;
