import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <div className="w-[300px] flex flex-col items-center  bg-white p-4  my-10 space-y-3 rounded-lg shadow-md">
          <h1 className="">Create your profile</h1>
          <form className="w-full">
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 border  rounded-lg border-cyan-400 focus-visible:outline-0 focus:border-cyan-400  focus:ring  focus:ring-cyan-300/50 focus:text-gray-800 transition-all duration-400"
              />
              <br />
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
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full p-2 border rounded-lg  border-cyan-400 focus-visible:outline-0 focus:border-cyan-400   focus:ring  focus:ring-cyan-300/50 focus:text-gray-800 transition-all duration-400"
              />
              <br />

              <button className="w-full text-center rounded-lg  bg-cyan-400 hover:bg-cyan-500 hover:text-white hover:ring  hover:ring-cyan-400/50 focus-visible:outline-0 focus:ring  focus:ring-cyan-400/50 transition-all duration-400 p-2">
                Sign Up
              </button>
            </div>
          </form>
          <div className="w-full flex justify-center items-center">
            <Link to="/login">
              <small>
                Already have an account?{" "}
                <span className="text-cyan-400 hover:text-cyan-500 transition-all duration-400 cursor-pointer">
                  Login
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
            <Link
              to=""
              className="block border border-cyan-400 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white hover:ring  hover:ring-cyan-400/50 focus-visible:outline-0 focus:ring  focus:ring-cyan-400/50 transition-all duration-400 rounded-full py-2  text-center"
            >
              Continue with Google
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
