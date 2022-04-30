import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white px-2 py-3">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/">Book Buddy</Link>
        <ul className="flex space-x-8 items-center text-sm">
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
