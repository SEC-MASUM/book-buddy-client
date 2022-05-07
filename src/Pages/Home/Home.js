import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Products from "../../Components/Products/Products";
import Search from "../../Components/Search/Search";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Dashboard></Dashboard>
      <Search></Search>
      <Products></Products>
      <div className="min-w-[300px] my-10">
        <div className="flex justify-center">
          <Link
            to="/manageInventories"
            className=" text-center rounded-lg  bg-amber-400 hover:bg-amber-500 hover:text-white hover:ring  hover:ring-amber-400/50 focus-visible:outline-0 focus:ring  focus:ring-amber-400/50 transition-all duration-400 px-5 py-3"
          >
            Manage Inventories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
