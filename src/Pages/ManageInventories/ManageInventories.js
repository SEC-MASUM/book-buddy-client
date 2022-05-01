import axios from "axios";
import React, { useEffect, useState } from "react";
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
                  <tr class="bg-white border-b  odd:bg-white even:bg-gray-50 hover:bg-amber-200">
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
                        class="font-medium text-blue-600  hover:underline"
                      >
                        Edit
                      </Link>
                      <Link
                        to=""
                        class="font-medium text-blue-600  hover:underline"
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
