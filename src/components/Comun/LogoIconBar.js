import { NavLink } from "react-router-dom";

const LogoIconBar = () => {
  return (
    <NavLink to="/search" className="w-full flex justify-center items-center fixed top-0 gradient-background h-16 z-10">
      <img
        className="h-3/4"
        src={require("../../images/output-logo-remove-bar-3.png")}
        alt="logo"
      ></img>
    </NavLink>
  );
};
export default LogoIconBar;
