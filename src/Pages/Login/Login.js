import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <div className="w-[300px] flex flex-col items-center  bg-white p-4  my-10 space-y-3">
          <h1>Login</h1>
          <form className="w-full">
            <div className="space-y-3">
              <input
                type="email"
                name="email"
                placeholder="email"
                className="w-full p-2"
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2"
              />
              <br />
              <div className="w-full flex justify-between items-center">
                <div>
                  <small className="flex items-center space-x-1">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                  </small>
                </div>
                <p>
                  <small>
                    <span className="text-cyan-400 hover:text-cyan-500 transition-all duration-400">
                      Forget Password?
                    </span>
                  </small>
                </p>
              </div>
              <button className="w-full text-center bg-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-400 p-2">
                Login
              </button>
            </div>
          </form>
          <div className="w-full flex justify-center items-center">
            <p>
              <small>
                Don't have an account?{" "}
                <span className="text-cyan-400 hover:text-cyan-500 transition-all duration-400">
                  Create an account
                </span>
              </small>
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="bg-cyan-200 h-[1px] w-full mt-1"></div>
            <div className="p-1">Or</div>
            <div className="bg-cyan-200 h-[1px] w-full mt-1"></div>
          </div>
          <div className="w-full ">
            <Link
              to=""
              className="block border border-cyan-400 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-400 rounded-full py-1  text-center"
            >
              Continue with Google
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
