import { Link } from "react-router-dom";
import SharedLinks from "../../SharedComponents/SharedLinks";
// import Navbar from "../../SharedComponents/Navbar";

const Login = () => {
  return (
    <div>
     
      <div className=" rounded-2xl mb-20 max-w-7xl mx-auto">
        <div className=" px-8 lg:px-0">
          <div className="  card login-style bg-[#f2f5fb] lg:w-2/5 mx-auto mt-16 shadow-lg shadow-slate-400">
            <div className="card-body flex-none ">
              <SharedLinks></SharedLinks>

              <form className="">
                {/* email input field ================  */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-lg">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="input "
                    required
                  />
                </div>

                {/* password input field ================  */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-lg">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input "
                    required
                  />
                  <label className="label">
                    {/* {registerError && (
                      <p className="text-sm text-red-400 font-medium text-center">
                        {registerError}
                      </p>
                    )} */}
                  </label>
                </div>

                {/* login button ================  */}
                <div className="form-control mt-6">
                  <button className="w-2/3 mx-auto btn bg-[#f60] normal-case text-white font-bold text-xl">
                    Login
                  </button>
                </div>
              </form>
              <p className="text-center">
                <span className="font-semibold">New User?</span>
                <Link
                  className="btn btn-link font-bold normal-case"
                  to="/register"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
