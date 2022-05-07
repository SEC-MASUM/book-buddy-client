import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { GiBookPile, GiBookshelf } from "react-icons/gi";
import useBook from "../../Hooks/useBook";
const Dashboard = () => {
  const { products } = useBook("", "");
  let totalQuantity = 0;
  const individualBooks = products.length;
  let totalSupplier = [""];
  for (const book of products) {
    totalQuantity = totalQuantity + parseInt(book.quantity);
    if (totalSupplier.indexOf(book.supplier.toLowerCase()) < 0) {
      totalSupplier.push(book.supplier.toLowerCase());
    }
  }
  return (
    <div className="my-10 px-3 md:px-0">
      <div className="min-w-[300px] grid bg-slate-200 rounded-lg p-3  grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white shadow-md p-3 rounded-lg flex items-center space-x-5">
          <div className="bg-sky-400 rounded-full p-3">
            <GiBookshelf className="w-10 h-10 text-white"></GiBookshelf>
          </div>
          <div>
            <h2>
              <span className="text-xl font-semibold">{individualBooks}</span>
            </h2>
            <p>
              <small className="text-gray-400">Individual Books</small>
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md p-3 rounded-lg flex items-center space-x-5">
          <div className="bg-purple-500 rounded-full p-3">
            <GiBookPile className="w-10 h-10 text-white"></GiBookPile>
          </div>
          <div>
            <h2>
              <span className="text-xl font-semibold">{totalQuantity}</span>
            </h2>
            <p>
              <small className="text-gray-400">Total Books</small>
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md p-3 rounded-lg flex items-center space-x-5">
          <div className="bg-orange-400 rounded-full p-3">
            <BsPeopleFill className="w-10 h-10 text-white"></BsPeopleFill>
          </div>
          <div>
            <h2>
              <span className="text-xl font-semibold">
                {totalSupplier.length}
              </span>
            </h2>
            <p>
              <small className="text-gray-400">Supplier</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
