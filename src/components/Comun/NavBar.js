import { FaSistrix, FaSignOutAlt, FaHeart, FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { signOutAccount } = useContext(LoginContext);

  const handleSignOut = async () => {
    signOutAccount();
  };
  return (
    <nav className="w-full fixed bottom-0 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex w-full justify-around">
              <NavLink to={"/search"}>
                <div className="text-gray-300 hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium" data-cy="searchNavBar">
                  <FaSistrix size={20} style={{ fill: "grey" }} />
                </div>
              </NavLink>
              <NavLink to={"/upload"}>
                <div className="text-gray-300 hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium" data-cy="uploadNavBar">
                  <FaPlus size={20} style={{ fill: "grey" }} />
                </div>
              </NavLink>

              <NavLink to={"/favorites"}>
                <div className="text-gray-300 hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium" data-cy="favoritesNavBar">
                  <FaHeart size={20} style={{ fill: "pink" }} />
                </div>
              </NavLink>
              <button
                onClick={handleSignOut}
                className="text-gray-300 hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium" data-cy="signOutNavBar"
              >
                <FaSignOutAlt size={20} style={{ fill: "grey" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
