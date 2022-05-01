import React from "react";
import Products from "../../Components/Products/Products";

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold underline mt-5">Book Buddy</h1>
      <Products></Products>
    </div>
  );
};

export default Home;
