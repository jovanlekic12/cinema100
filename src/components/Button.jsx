function Button({
  children,
  onClick,
  type,
  size,
  position,
  variant,
  isActive,
  color,
}) {
  const rootClass = "btn";

  const classes = [
    rootClass,
    type && `${rootClass}-${type}`,
    size && `${rootClass}-${size}`,
    position && `${rootClass}-${position}`,
    variant && `${rootClass}-${variant}`,
    color && `${rootClass}-${color}`,
    isActive && `${rootClass}-${isActive}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
