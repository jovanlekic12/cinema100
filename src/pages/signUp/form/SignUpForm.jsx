import Button from "../../../components/Button";

function SignUpForm(props) {
  return (
    <form className="form">
      <h2 className="form__heading">Sign Up</h2>
      <div className="form__inputs__div">
        <input
          type="text"
          className="form__input"
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          name="last name"
          className="form__input"
          placeholder="Last Name"
        />
        <input
          type="text"
          className="form__input"
          name="email"
          placeholder="Email"
        />

        <input
          type="password"
          className="form__input"
          name="password"
          placeholder="Password"
        />
      </div>
      <Button className="submit__btn">Log In</Button>
      <div className="redirect__div">
        <p className="redirect__p">Already have an account?</p>
        <Button className="redirect__btn">Log In</Button>
      </div>
    </form>
  );
}
export default SignUpForm;
