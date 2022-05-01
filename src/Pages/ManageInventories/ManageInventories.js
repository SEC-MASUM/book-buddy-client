import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

const ManageInventories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://book-buddy01.herokuapp.com/book`;
    (async () => {
      axios.get(url).then((res) => setProducts(res.data.result));
    })();
  }, []);
  return (
    <div className="container mx-auto">
      <div className="my-10">
        <h1 className="text-center text-3xl font-bold underline mb-5">
          Manage Inventories
        </h1>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="p-4 bg-amber-400 flex justify-between items-center">
            <div class="">
              <label for="table-search" class="sr-only">
                Search
              </label>
              <div class="relative mt-1">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <HiSearch class="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  id="table-search"
                  class="bg-white border-0 rounded-lg hover:bg-white hover:text-cyan-800 hover:ring  hover:ring-white/50  focus:ring  focus:ring-white/50 block w-80 pl-10 p-2.5  "
                  placeholder="Search for items"
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

          <table class="w-full text-sm text-left text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-300  ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Supplier
                </th>
                <th scope="col" class="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr class="bg-white border-b  odd:bg-white even:bg-gray-50 hover:bg-amber-200 transition-all duration-200">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                    >
                      {product.name}
                    </th>
                    <td class="px-6 py-4">{product.supplier}</td>
                    <td class="px-6 py-4">{product.quantity}</td>
                    <td class="px-6 py-4">$ {product.price}</td>
                    <td class="px-6 py-4 text-right flex justify-between">
                      <Link
                        to=""
                        class="font-medium text-cyan-500  hover:text-white hover:bg-cyan-500 transition-all duration-200 py-2 px-3 rounded"
                      >
                        Update
                      </Link>
                      <Link
                        to=""
                        class="font-medium text-rose-500 hover:text-white  hover:bg-rose-600 transition-all duration-200 py-2 px-3 rounded"
                      >
                        Delete
                      </Link>
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
