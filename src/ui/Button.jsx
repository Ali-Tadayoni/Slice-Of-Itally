function Button({ children, color, type }) {
  return (
    <button className={`font-PoppinsSemiBold ${color} ${type}`}>
      {children}
    </button>
  );
}

export default Button;
