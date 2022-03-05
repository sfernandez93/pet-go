const LoginButton = ({ onClick }) => (
    <div className="googleButton">
      <span className="icon"></span>
      <span className="text" rol="button" onClick={onClick}>Log In with Google</span>
    </div>
  );
  
  export default LoginButton;