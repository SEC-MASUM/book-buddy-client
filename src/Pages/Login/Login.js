import React from "react";

const Login = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex justify-center items-center">
        <div className="bg-white p-8 mt-10">
          <h1>Login</h1>
          <form>
            <div className="space-y-3">
              <input type="email" name="email" placeholder="email" />
              <br />
              <input type="password" name="password" placeholder="Password" />
              <br />
              <button className="w-full text-center bg-teal-400">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
