import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink className='text-lg text-white' to='/'>Home</NavLink>
      </li>

      <li>
        <NavLink className='text-lg text-white' to='/login'>Login</NavLink>
      </li>

      <li>
        <NavLink className='text-lg text-white' to='/register'>Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar md:bg-[#252e45]">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className=" normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
