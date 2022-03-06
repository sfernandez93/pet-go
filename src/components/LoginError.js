const LoginError = ({ error }) => {
  return (
    <p className="text-xs self-center pb-5 text-blue-900 font-semibold">
      {error}
    </p>
  );
};
export default LoginError;
