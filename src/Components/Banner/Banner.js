import React from "react";
const Banner = () => {
  return (
    <div className="min-w-[300px] h-screen relative">
      <img
        src="https://i.ibb.co/wWZctCm/image.jpg"
        alt=""
        className="w-full h-full object-cover "
      />
      <div className="w-full h-full flex justify-center items-center text-6xl font-extrabold text-center  text-white underline bg-black/50 absolute top-0">
        <h1 className="">Book Buddy</h1>
      </div>
    </div>
  );
};

export default Banner;
