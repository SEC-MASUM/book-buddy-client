import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const InventoryDetailsCard = ({ handleDeliver, product, children }) => {
  console.log(product);
  return (
    <div className="container mx-auto ">
      <div className=" w-full my-10 ">
        <div className="mx-auto bg-slate-50 shadow-sm border border-slate-300 rounded-lg">
          <div className="grid grid-cols-3 gap-3 p-4">
            <div className="border bg-white border-slate-300 rounded-md flex justify-center items-center">
              <img
                className="w-full h-72  object-contain"
                src={product.image}
                alt=""
              />
            </div>
            <div className="col-span-2 p-3 space-y-3">
              <h1 className="text-xl font-semibold">{product.name}</h1>
              <p>
                {product.author ? (
                  <span>
                    by <span className="text-cyan-500">{product.author}</span>
                  </span>
                ) : (
                  ""
                )}
              </p>
              <h4 className="text-sm">
                <span className=" font-semibold">Supplier:</span>{" "}
                <span className="text-cyan-500">{product.supplier}</span>
              </h4>
              <div>
                <h5 className="line-through font-medium text-gray-500">
                  TK. {Math.ceil(parseInt(product.price) * 1.25)}
                </h5>
                <h5 className="font-medium">
                  TK. {product.price}{" "}
                  <span className="text-gray-500">
                    <small>
                      You Save TK.{Math.ceil(parseInt(product.price) * 0.25)}{" "}
                      (25%)
                    </small>
                  </span>{" "}
                </h5>
              </div>
              {parseInt(product.quantity) > 0 ? (
                <p>
                  <small className="flex items-center space-x-1">
                    <FaCheckCircle className="text-green-600" />
                    <span>In Stock ({product.quantity} copies available)</span>
                  </small>
                </p>
              ) : (
                <p>
                  <small className="flex items-center space-x-1">
                    <ImCross className="bg-rose-600 rounded-full p-[2px] text-white" />
                    <span className="text-rose-600">Out of stock</span>
                  </small>
                </p>
              )}

              <div className="flex justify-start space-x-3">
                <button className=" text-center rounded-lg  bg-green-400 border border-green-400 hover:bg-green-500 hover:text-white hover:ring  hover:ring-green-400/50 focus-visible:outline-0 focus:ring  focus:ring-green-400/50 transition-all duration-400 p-2 px-6">
                  Order
                </button>
                <button
                  onClick={handleDeliver}
                  className=" text-center rounded-lg  bg-amber-400 hover:bg-amber-500 hover:text-white hover:ring  hover:ring-amber-400/50 focus-visible:outline-0 focus:ring  focus:ring-amber-400/50 transition-all duration-400 p-2 px-5"
                >
                  Delivered
                </button>
                {children}
              </div>
              <div className="">
                <h6 className="rounded-t-md inline-block px-1 pb-1 m-0 bg-amber-400">
                  <small>Short Description</small>
                </h6>
                <p className="border rounded-b rounded-r border-slate-200 p-2">
                  <span className="text-xs ">{product.description}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetailsCard;
