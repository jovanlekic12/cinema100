function Input({
  type = "text",
  name,
  placeholder,
  handleChange,
  className = "form__input",
}) {
  return (
    <input
      onChange={handleChange}
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default Input;
