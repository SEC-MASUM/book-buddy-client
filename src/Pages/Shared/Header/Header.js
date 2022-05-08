import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { ImBook } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth);
    navigate("/");
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  // console.log(user);
  return (
    <nav className="min-w-[300px] bg-white">
      <div className="container  mx-auto relative px-2 py-3 z-20">
        <div className="flex flex-wrap justify-between items-center ">
          <Link to="/" className="flex items-center space-x-2">
            <ImBook className="w-6 h-6 text-green-400" />
            <span className="text-[#110A57] font-bold"> Book Buddy</span>
          </Link>
          <div className="block md:hidden border-2 border-green-400 rounded p-2 text-[#110A57]">
            {showMenu ? (
              <AiOutlineClose onClick={handleShowMenu}></AiOutlineClose>
            ) : (
              <FiMenu onClick={handleShowMenu}></FiMenu>
            )}
          </div>
          <div className="hidden md:block">
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
        </div>
        {showMenu ? (
          <div className="bg-green-200  block md:hidden absolute p-0 top-[60px] right-0 z-10 rounded-bl-lg">
            <ul
              className="flex flex-col space-y-4 items-end text-sm p-4"
              onClick={handleShowMenu}
            >
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
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Header;
