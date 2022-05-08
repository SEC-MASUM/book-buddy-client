import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import ConfirmDeleteModal from "../../Components/ConfirmDeleteModal/ConfirmDeleteModal";
import useBook from "../../Hooks/useBook";
import Loading from "../Loading/Loading";

const ManageInventories = () => {
  const { products, state, setState } = useBook("", "");
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  const handleState = () => {
    setState(!state);
  };

  if (products.length === 0) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto">
      <div className="min-w-[300px] px-3 my-10">
        <h1 className="text-center text-3xl font-bold underline mb-5">
          Manage Inventories
        </h1>

        <div className="w-full my-5 ">
          <div className="p-4 rounded-lg bg-amber-400 flex flex-col justify-between items-center md:flex-row md:justify-between md:items-center">
            <div className=" flex justify-center p-3">
              <div className="  relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <HiSearch className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  id="search"
                  className="bg-white border-0 rounded-lg hover:bg-white hover:text-cyan-800 hover:ring  hover:ring-white/50  focus:ring  focus:ring-white/50 block  w-full  pl-10 p-2.5  "
                  placeholder="Search by book title"
                />
              </div>
            </div>
            <div>
              <Link
                to="/addInventory"
                className="w-full text-center rounded-lg  bg-white hover:bg-white hover:text-cyan-600 hover:ring  hover:ring-white/50 focus-visible:outline-0 focus:ring  focus:ring-white/50 transition-all duration-400 py-2 px-3"
              >
                Add Item
              </Link>
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-300  ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Supplier
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr
                    key={product._id}
                    className="bg-white border-b  odd:bg-white even:bg-gray-50 hover:bg-amber-200 transition-all duration-200"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                    >
                      {product.name}
                    </th>
                    <td className="px-6 py-4">{product.supplier}</td>
                    <td className="px-6 py-4">{product.quantity}</td>
                    <td className="px-6 py-4">$ {product.price}</td>
                    <td className="px-6 py-4 text-right flex justify-between">
                      <Link
                        to={`/inventoryDetails/${product._id}`}
                        className="font-medium text-cyan-500  hover:text-white hover:bg-cyan-500 transition-all duration-200 py-2 px-3 rounded"
                      >
                        Update
                      </Link>
                      {/* <button
                        onClick={() => handleDelete(product._id)}
                        className="font-medium text-rose-500 hover:text-white  hover:bg-rose-600 transition-all duration-200 py-2 px-3 rounded"
                      >
                        Delete
                      </button> */}
                      <ConfirmDeleteModal
                        handleState={handleState}
                        productId={product._id}
                        loading={loading}
                        setLoading={setLoading}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-3 gap-10"></div>
      </div>
    </div>
  );
};

export default ManageInventories;
