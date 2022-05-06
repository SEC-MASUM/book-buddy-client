import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const RestockItem = ({ handleState, product }) => {
  const handleUpdateQuantity = (event) => {
    event.preventDefault();
    const addQuantity = Number.parseInt(event.target.quantity.value);
    if (addQuantity > 0) {
      const preQuantity = Number.parseInt(product.quantity) || 0;
      console.log(preQuantity);
      const newQuantity = preQuantity + addQuantity;
      console.log(preQuantity);
      console.log(addQuantity);
      const body = {
        quantity: newQuantity,
      };
      console.log(newQuantity);

      (async () => {
        // const url = `http://localhost:5000/book/${id}`;
        const url = `https://book-buddy01.herokuapp.com/book/${product._id}`;

        await axios.put(url, body).then((res) => {
          handleState(); // setState(!state);
          event.target.reset();
          toast(res.data.message);
        });
      })();
    } else {
      toast("Please enter positive value");
    }
  };
  return (
    <div className="container mx-auto">
      <div className=" w-full  my-10">
        <div className="w-5/6 mx-auto bg-slate-50 shadow-sm border border-slate-300 rounded-lg">
          <h1 className="w-full text-center text-[#110A57] text-2xl font-bold border-b border-slate-300 py-4">
            Restock this item
          </h1>
          <form onSubmit={handleUpdateQuantity} className="p-4">
            <div className=" flex justify-between space-x-4 mb-5">
              <div className="w-full ">
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="0"
                  placeholder="Add new quantity"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-400 block w-full p-2.5 "
                  required
                />
              </div>
            </div>
            <input
              type="submit"
              className="w-full text-center rounded-lg  bg-cyan-400 hover:bg-cyan-500 hover:text-white hover:ring  hover:ring-cyan-400/50 focus-visible:outline-0 focus:ring  focus:ring-cyan-400/50 transition-all duration-400 p-2"
              value="Stock Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RestockItem;
