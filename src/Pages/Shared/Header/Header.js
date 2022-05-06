import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ImBook } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth);
    navigate("/");
  };
  // console.log(user);
  return (
    <nav className="bg-white px-2 py-3">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <ImBook className="w-6 h-6 text-green-400" />
          <span className="text-[#110A57] font-bold"> Book Buddy</span>
        </Link>
        <ul className="flex space-x-8 items-center text-sm">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>

          {user ? (
            <>
              <Link to="/manageInventories">Manage Books</Link>
              <Link to="/addInventory">Add Book</Link>
              <Link to="/myItems">My Books</Link>
              <Link to="/">{user.displayName}</Link>
              <button onClick={handleSignOut}>Sign Out</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
