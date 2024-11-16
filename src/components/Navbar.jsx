import { Link, NavLink } from "react-router-dom";
import userImage from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center flex-col-reverse lg:flex-row gap-4 lg:gap-0">
      <div className="text-xl font-bold mb-2 text-gray-900">
        {user && user.email}
      </div>
      <div className="text-[#706F6F] text-lg flex gap-6">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          About
        </NavLink>
        <NavLink
          to={"/career"}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Career
        </NavLink>
      </div>
      <div className="flex gap-4">
        <img src={userImage} alt="" />
        {user ? (
          <button
            onClick={signOutUser}
            className="py-1 px-8 bg-stone-700 text-xl text-white font-bold"
          >
            Logout
          </button>
        ) : (
          <Link
            to={"/auth/login"}
            className="py-1 px-8 bg-stone-700 text-xl text-white font-bold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
