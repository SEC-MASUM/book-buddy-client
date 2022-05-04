import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";
import Loading from "../Loading/Loading";
const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorElement;

  const handleGoogleLogin = async () => {
    await signInWithGoogle();
  };

  const handleCreateUser = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName });
    } else {
      toast("Confirm your Password");
    }
  };

  if (googleError || error || updateError) {
    // console.log(googleError?.message || error?.message);
    errorElement = (
      <p className="text-rose-600">
        <small>
          {googleError?.message || error?.message || updateError?.message}
        </small>
      </p>
    );
  }
  if (googleLoading || loading || updating) {
    return <Loading />;
  }
  if (googleUser || user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <div className="w-[300px] flex flex-col items-center  bg-white p-4  my-10 space-y-3 rounded-lg shadow-md">
          <h1 className="">Create your profile</h1>
          <form onSubmit={handleCreateUser} className="w-full">
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Name"
                className="w-full p-2 border  rounded-lg border-cyan-400 focus-visible:outline-0 focus:border-cyan-400  focus:ring  focus:ring-cyan-300/50 focus:text-gray-800 transition-all duration-400"
              />
              <br />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-2 border  rounded-lg border-cyan-400 focus-visible:outline-0 focus:border-cyan-400  focus:ring  focus:ring-cyan-300/50 focus:text-gray-800 transition-all duration-400"
              />
              <br />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-2 border rounded-lg  border-cyan-400 focus-visible:outline-0 focus:border-cyan-400   focus:ring  focus:ring-cyan-300/50 focus:text-gray-800 transition-all duration-400"
              />
              <br />
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full p-2 border rounded-lg  border-cyan-400 focus-visible:outline-0 focus:border-cyan-400   focus:ring  focus:ring-cyan-300/50 focus:text-gray-800 transition-all duration-400"
              />
              <br />

              <button
                type="submit"
                className="w-full text-center rounded-lg  bg-cyan-400 hover:bg-cyan-500 hover:text-white hover:ring  hover:ring-cyan-400/50 focus-visible:outline-0 focus:ring  focus:ring-cyan-400/50 transition-all duration-400 p-2"
              >
                Sign Up
              </button>
            </div>
            {errorElement}
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
            <button
              onClick={handleGoogleLogin}
              className="w-full block border border-cyan-400 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white hover:ring  hover:ring-cyan-400/50 focus-visible:outline-0 focus:ring  focus:ring-cyan-400/50 transition-all duration-400 rounded-full py-2  text-center"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
