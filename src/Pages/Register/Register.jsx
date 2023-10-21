import { Link } from "react-router-dom";
import SharedLinks from "../../SharedComponents/SharedLinks";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");

  const {dark} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    setRegisterError("");

    console.log("From register page: ", name, email);

    if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      setRegisterError(
        "Password is invalid. It must have at least 6 characters, one uppercase letter, and one special character."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => console.log(error));
        Swal.fire(
          "Registration Completed",
          "Thanks for registering",
          "success"
        );
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };
  return (
    <div className="">
      <div className=" rounded-2xl mb-20 max-w-7xl mx-auto">
        <div className=" px-8 lg:px-0">
          <div className={`card login-style lg:w-2/5 mx-auto mt-16 ${dark ? 'bg-[#a9afbc]' : 'bg-[#f2f4f9]  shadow-lg shadow-slate-700'}`}>
            <div className="card-body flex-none ">
              <SharedLinks></SharedLinks>

              <form className="" onSubmit={handleRegister}>
                {/* name input field ================  */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-lg">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input"
                    required
                  />
                </div>

                {/* photo url input field ================  */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-lg">
                      Photo URl
                    </span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL here"
                    className="input"
                    required
                  />
                </div>

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
                    {registerError && (
                      <p className="text-sm text-red-400 font-medium text-center">
                        {registerError}
                      </p>
                    )}
                  </label>
                </div>

                {/* login button ================  */}
                <div className="form-control mt-6">
                  <button className="w-2/3 mx-auto btn bg-[#f60] normal-case border-0 text-white font-bold text-xl">
                    Register
                  </button>
                </div>
              </form>
              <p className="text-center">
                <span className="font-semibold">Already have an account?</span>
                <Link
                  className="btn btn-link font-bold normal-case"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
