function InputsDiv({ handleChange }) {
  return (
    <div className="form__inputs__div">
      <input
        onChange={handleChange}
        type="text"
        className="form__input"
        name="name"
        placeholder="Name"
      />
      <input
        onChange={handleChange}
        type="text"
        name="lastName"
        className="form__input"
        placeholder="lastName"
      />
      <input
        onChange={handleChange}
        type="text"
        className="form__input"
        name="email"
        placeholder="Email"
      />

      <input
        onChange={handleChange}
        type="password"
        className="form__input"
        name="password"
        placeholder="Password"
      />
    </div>
  );
}
export default InputsDiv;
