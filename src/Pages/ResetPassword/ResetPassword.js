import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import Loading from "../Loading/Loading";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  if (sending) {
    return <Loading />;
  }

  let errorElement;
  if (error) {
    if (error?.code === "auth/user-not-found") {
      error.message = "User not found";
    } else if (error?.code === "auth/invalid-email") {
      error.message = "Invalid email";
    }
    errorElement = (
      <span className="text-rose-600 px-2">
        <small>{error?.message}</small>
      </span>
    );
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendLink = async (event) => {
    event.preventDefault();
    await sendPasswordResetEmail(email);
    // await sendPasswordResetEmail(email);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <div className="w-[300px] flex flex-col items-center  bg-white p-4  my-10 space-y-3 rounded-lg shadow-md">
          <h1 className="">Reset your password</h1>
          <form onSubmit={handleSendLink} className="w-full">
            <div className="space-y-3">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your email address"
                className="w-full p-2 border  rounded-lg border-cyan-400 focus-visible:outline-0 focus:border-cyan-400  focus:ring  focus:ring-cyan-300/50 focus:text-gray-800 transition-all duration-400"
                required
              />
              <br />
              {errorElement}
              <button
                type="submit"
                className="w-full text-center rounded-lg  bg-cyan-400 hover:bg-cyan-500 hover:text-white hover:ring  hover:ring-cyan-400/50 focus-visible:outline-0 focus:ring  focus:ring-cyan-400/50 transition-all duration-400 p-2"
              >
                Send reset link
              </button>
            </div>
          </form>
          <div className="w-full flex justify-center items-center">
            <Link to="/signup">
              <small>
                Don't have an account yet?{" "}
                <span className="text-cyan-400 hover:text-cyan-500 transition-all duration-400 cursor-pointer">
                  Sign up
                </span>
              </small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
