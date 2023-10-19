import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("successfully log out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink className="text-lg lg:text-xl text-black font-bold" to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink className="text-lg lg:text-xl text-black font-bold" to="/about">
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink className="text-lg lg:text-xl text-black font-bold" to="/register">
          Register
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink className="text-lg lg:text-xl text-black font-bold" to="/addProduct">
            Add Product
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar lg:py-4 lg:px-10 sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="navbar-start w-full md:w-1/2">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <Link className=" lg:w-3/5" to="/">
          <img className="w-full" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu custom menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-1 justify-center items-center">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className=" m-1">
                <img
                  className="w-14 h-14 rounded-full border-2 border-black"
                  src={user.photoURL}
                  alt="user profile pic"
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[2] menu p-1 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <h1 className="text-left  font-semibold">
                    Name:{user.displayName}{" "}
                  </h1>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn bg-[#f60] hover:bg-[#f60] w-2/3  pt-4 mx-auto text-center  text-white border-0 font-semibold normal-case"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link
            className="btn bg-[#f60] hover:bg-[#f60] text-lg text-white font-semibold border-0 normal-case"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
