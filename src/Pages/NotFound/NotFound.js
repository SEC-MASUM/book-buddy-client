import React from "react";
import { RiHome4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto">
      <div className="">
        <div className="grid justify-center items-center min-h-screen place-content-center mt-[-80px]">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-9xl font-black text-cyan-400">404</h1>
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-bold text-[#110A57]">
                Oops! This Page is Not Found.
              </h3>
              <p className="text-gray-500">
                The requested page dose not exist.
              </p>
            </div>
            <Link
              to="/"
              className="text-center rounded-lg  bg-cyan-400 hover:bg-cyan-500 hover:text-white hover:ring  hover:ring-cyan-400/50 focus-visible:outline-0 focus:ring  focus:ring-cyan-400/50 transition-all duration-400 p-2 px-4"
            >
              <div className=" flex items-center space-x-2">
                <RiHome4Fill />
                <span>Back to Home</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
