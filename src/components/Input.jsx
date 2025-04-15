function Input({
  type = "text",
  name,
  placeholder,
  onChange,
  className = "form__input",
}) {
  return (
    <input
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default Input;
