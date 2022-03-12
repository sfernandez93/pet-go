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
    <nav class="w-full fixed bottom-0 bg-white">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex w-full justify-around">
              <NavLink to={"/search"}>
                <div class="text-gray-300 hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <FaSistrix size={20} style={{ fill: "grey" }} />
                </div>
              </NavLink>
              <NavLink to={"/upload"}>
                <div class="text-gray-300 hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <FaPlus size={20} style={{ fill: "grey" }} />
                </div>
              </NavLink>

              <NavLink to={"/favorites"}>
                <div class="text-gray-300 hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <FaHeart size={20} style={{ fill: "pink" }} />
                </div>
              </NavLink>
              <button
                onClick={handleSignOut}
                class="text-gray-300 hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
