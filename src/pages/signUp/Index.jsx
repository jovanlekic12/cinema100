import SignUpForm from "./form/SignUpForm";

function SignUp(props) {
  return (
    <main className="form__container">
      <div className="logo__div">
        <img src="../logo.png" alt="" className="logo__img" />
        <p className="logo__text">cinema 100</p>
      </div>
      <SignUpForm></SignUpForm>
    </main>
  );
}

export default SignUp;
