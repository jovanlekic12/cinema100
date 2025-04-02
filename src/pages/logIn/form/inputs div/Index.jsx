function InputsDiv({ handleChange }) {
  return (
    <div className="form__inputs__div">
      <input
        type="text"
        className="form__input"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
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
