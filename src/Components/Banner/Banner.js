import React from "react";
import banner from "../../Assets/images/image.jpg";
const Banner = () => {
  return (
    <div className="h-screen relative">
      <img src={banner} alt="" className="w-full h-full object-cover " />
      <div className="w-full h-full flex justify-center items-center text-6xl font-extrabold  text-white underline bg-black/50 absolute top-0">
        <h1 className="">Book Buddy</h1>
      </div>
    </div>
  );
};

export default Banner;
