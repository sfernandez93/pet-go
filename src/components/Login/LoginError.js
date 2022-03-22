const LoginError = ({ error, dataCy }) => {
  return (
    <p className="text-xs self-center pb-5 text-blue-900 font-semibold" data-cy={dataCy}>
      {error}
    </p>
  );
};
export default LoginError;
