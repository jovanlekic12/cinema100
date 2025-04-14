import Input from "../../../../components/Input";

function InputsDiv({ handleChange }) {
  return (
    <div className="form__inputs__div">
      <Input
        className="form__input"
        name="email"
        placeholder="Email"
        onChange={(e) => handleChange(e)}
      />
      <Input
        type="password"
        className="form__input"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
    </div>
  );
}
export default InputsDiv;
