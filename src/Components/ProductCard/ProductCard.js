import React from "react";
import { AiFillPieChart } from "react-icons/ai";
import { FcInTransit } from "react-icons/fc";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, description, price, quantity, supplier, image } = product;
  console.log(image, name);
  return (
    <div className="flex justify-center">
      <div className="bg-[#15263F] w-80 h-[32rem] rounded-xl p-6 space-y-4">
        <img
          className="w-full h-64 object-contain rounded-md bg-white"
          src={image}
          alt=""
        />

        <div id="description" className="space-y-4">
          <Link to="">
            <h2 className="text-white font-semibold text-xl transition hover:text-cyan-300">
              {name}
            </h2>
          </Link>
          <p className="text-slate-500 text-sm select-none">{description}</p>

          <div className="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
            <span
              id="price"
              className="text-cyan-300 flex justify-between items-center"
            >
              $ {price}
            </span>

            <span className="text-slate-500 flex justify-between items-center select-none">
              <AiFillPieChart className="h-3 w-3 mr-1" />
              {quantity} Pieces available
            </span>
          </div>

          <div className="flex text-sm items-center">
            <FcInTransit className="w-8 h-8 p-1 rounded-full border border-white" />
            <span className="ml-2 text-slate-500">
              Supplied by
              <span
                href="#"
                className="text-gray-300 transition hover:text-cyan-300"
              >
                {" "}
                {supplier}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
