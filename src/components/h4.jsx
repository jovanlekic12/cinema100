function H4({ children, className }) {
  return (
    <h4
      className={className ? `heading__fourth ${className}` : "heading__fourth"}
    >
      {children}
    </h4>
  );
}

export default H4;
