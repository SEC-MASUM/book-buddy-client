import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import Loading from "../Loading/Loading";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [user, userLoading, userError] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorElement;

  const handleGoogleLogin = async () => {
    await signInWithGoogle();
  };

  if (googleError || userError) {
    console.log(googleError.message || userError.message);
    errorElement = (
      <p className="text-rose-600">
        <small>{googleError.message}</small>
      </p>
    );
  }
  if (googleLoading || userLoading) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <div className="w-[300px] flex flex-col items-center  bg-white p-4  my-10 space-y-3 rounded-lg shadow-md">
          <h1>Login</h1>
          <form className="w-full">
            <div className="space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border  rounded-lg border-cyan-400 focus-visible:outline-0 focus:border-cyan-400  focus:ring  focus:ring-cyan-300/50 focus:text-gray-800 transition-all duration-400"
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 border rounded-lg  border-cyan-400 focus-visible:outline-0 focus:border-cyan-400   focus:ring  focus:ring-cyan-300/50 focus:text-gray-800 transition-all duration-400"
              />
              <br />
              <div className="w-full flex justify-between items-center">
                <div>
                  <small className="flex items-center space-x-1">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="rounded-full h-4 w-4 border border-cyan-400 bg-white checked:bg-cyan-400  focus-visible:text-cyan-500 focus:checked:bg-cyan-400 
                      hover:checked:bg-cyan-500 focus:ring  focus:ring-cyan-400/50 transition duration-200 mt-1 cursor-pointer"
                    />
                    <label htmlFor="remember">Remember me</label>
                  </small>
                </div>

                <Link to="/resetPassword">
                  <small>
                    <span className="text-cyan-400 hover:text-cyan-500 transition-all duration-400 cursor-pointer">
                      Forget Password?
                    </span>
                  </small>
                </Link>
              </div>
              <button className="w-full text-center rounded-lg  bg-cyan-400 hover:bg-cyan-500 hover:text-white hover:ring  hover:ring-cyan-400/50 focus-visible:outline-0 focus:ring  focus:ring-cyan-400/50 transition-all duration-400 p-2">
                Login
              </button>
            </div>
            {errorElement}
          </form>
          <div className="w-full flex justify-center items-center">
            <Link to="/signup">
              <small>
                Don't have an account?{" "}
                <span className="text-cyan-400 hover:text-cyan-500 transition-all duration-400 cursor-pointer">
                  Create an account
                </span>
              </small>
            </Link>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="bg-cyan-200 h-[1px] w-full mt-1"></div>
            <div className="px-2">OR</div>
            <div className="bg-cyan-200 h-[1px] w-full mt-1"></div>
          </div>
          <div className="w-full ">
            <button
              onClick={handleGoogleLogin}
              className="w-full border border-cyan-400 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white hover:ring  hover:ring-cyan-400/50 focus-visible:outline-0 focus:ring  focus:ring-cyan-400/50 transition-all duration-400 rounded-full py-2  text-center"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
