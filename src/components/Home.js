import { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { TodoContext } from "../context/TodoContext";
import "./Home.css";

const Home = () => {
  const { signOutAccount } = useContext(TodoContext);

  const handleSignOut = async () => {
    signOutAccount();
  };


  return (
    <div>
      <h1>Welcome Home</h1>
      <p>
        <button onClick={handleSignOut}>Signout</button>
      </p>
    </div>
    // <div >
    //   <div class="w-80 py-8 flex items-center flex-col mb-3">
    //     <h1 class="logo-pet-go">Pet go!</h1>
    //     <form class="mt-8 w-64 flex flex-col">
    //       <input
    //         autofocus
    //         class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
    //         id="email"
    //         placeholder="Phone number, username, or email"
    //         type="text"
    //       ></input>
    //       <input
    //         autofocus
    //         class="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
    //         id="password"
    //         placeholder="Password"
    //         type="password"
    //       ></input>
    //       <a class=" text-sm text-center bg-blue-300 text-white py-1 rounded font-medium">
    //         Log In
    //       </a>
    //     </form>
    //     <div class="flex justify-evenly space-x-2 w-64 mt-4">
    //       <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
    //       <span class="flex-none uppercase text-xs text-gray-400 font-semibold">
    //         or
    //       </span>
    //       <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
    //     </div>
    //     <button class="mt-4 flex">
    //       <div class="bg-no-repeat google-logo mr-1"></div>
    //       <span class="text-xs text-blue-900 font-semibold">
    //         Log in with Google
    //       </span>
    //     </button>
    //   </div>
    //   <div class="text-center w-80 py-4">
    //     <span class="text-sm">Don't have an account?</span>
    //     <a class="text-blue-500 text-sm font-semibold"> Sign up</a>
    //   </div>
    // </div>
  );
};
export default Home;
