const LoginInput = ({ inputRef, type, inputValue, inputFunction, placeholder }) => {
  return (
    <input
      ref={inputRef}
      type={type}
      autoFocus
      required
      value={inputValue}
      onChange={(e) => inputFunction(e.target.value)}
      className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
      placeholder={placeholder}
    ></input>
  );
};
export default LoginInput;
