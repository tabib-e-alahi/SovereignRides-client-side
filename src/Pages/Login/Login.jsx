import { Link } from "react-router-dom";
import SharedLinks from "../../SharedComponents/SharedLinks";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import Swal from "sweetalert2";



const Login = () => {
  const { loggedIn } = useContext(AuthContext);
  const [signInError, setSignInError] = useState("");


  const {dark} = useContext(AuthContext)

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log("From login page: ", email, password);
    setSignInError("");

    loggedIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire("LogIn Successful", "Enjoy Yourself", "success");
        e.target.reset();
         
      })
      .catch((error) => {
        console.log(error);
        setSignInError(
          "Wrong Email or password. Please recheck your information."
        );
      });
  };

  return (
    <div>
      
      <div className=" rounded-2xl mb-20 max-w-7xl mx-auto">
        <div className=" px-8 lg:px-0">
          <div className={`card login-style lg:w-2/5 mx-auto mt-16 ${dark ? 'bg-[#a9afbc]' : 'bg-[#f2f4f9]  shadow-lg shadow-slate-700'}`}>
            <div className="card-body flex-none ">
              <SharedLinks></SharedLinks>

              <form className="" onSubmit={handleSignIn}>
                {signInError && (
                  <label className="label">
                    <span className="label-text text-red-400">
                      {signInError}
                    </span>
                  </label>
                )}
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
                  <button className="w-2/3 mx-auto btn bg-[#f60] normal-case border-0 text-white font-bold text-xl">
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
