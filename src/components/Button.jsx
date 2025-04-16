function Button({
  children,
  onClick,
  type = "standard",
  isActive,
  variant,
  className = "",
}) {
  const rootClass = "btn";

  const classes = [
    rootClass,
    type && `${rootClass}-${type}`,
    variant && `${rootClass}-${variant}`,
    isActive && `${rootClass}-${isActive}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={`${classes} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
