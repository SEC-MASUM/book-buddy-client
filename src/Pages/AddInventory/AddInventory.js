import axios from "axios";
import React, { useEffect, useState } from "react";
const AddInventory = () => {
  const [bookData, setBookData] = useState({});

  // useEffect(() => {
  //   (async () => {
  //     const url = `https://book-buddy01.herokuapp.com/addBook`;
  //     await axios.post(url);
  //   })();
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.title.value,
      description: event.target.description.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      supplier: event.target.supplier.value,
      image: event.target.image.value,
    };
    console.log(data);
  };
  return (
    <div className="container mx-auto">
      <div className=" w-full  p-3 my-10">
        <div className=" w-1/2 mx-auto bg-slate-50 shadow-sm border border-slate-300 rounded-lg">
          <h1 className="w-full text-center text-[#110A57] text-3xl font-bold border-b border-slate-300 py-4">
            Add New Book
          </h1>
          <form action="" onSubmit={handleSubmit} className="p-4">
            <div className=" flex justify-between space-x-4 mb-5">
              <div className="w-full space-y-3">
                <div className="w-full ">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Book Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Book Title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-400 block w-full p-2.5 "
                    required
                  />
                </div>
                <div className="w-full ">
                  <label
                    htmlFor="author"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Author Name(Optional)
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    placeholder="Author Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-400 block w-full p-2.5 "
                  />
                </div>
                <div className="flex space-x-3">
                  <div className="w-full ">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      placeholder="Price"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-400 block w-full p-2.5 "
                      required
                    />
                  </div>
                  <div className="w-full ">
                    <label
                      htmlFor="quantity"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      placeholder="Quantity"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-400 block w-full p-2.5 "
                      required
                    />
                  </div>
                </div>
                <div className="w-full ">
                  <label
                    htmlFor="supplier"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Supplier
                  </label>
                  <input
                    type="text"
                    id="supplier"
                    name="supplier"
                    placeholder="Supplier"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-400 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    for="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Short Description(Optional)
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="3"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-cyan-400 focus:border-cyan-400 "
                    placeholder="Short Description..."
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="image">Upload Image</label>
                  <br />
                  <input
                    type="text"
                    id="image"
                    name="image"
                    placeholder="Image URL"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-400 block w-full p-2.5 "
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-center rounded-lg  bg-cyan-400 hover:bg-cyan-500 hover:text-white hover:ring  hover:ring-cyan-400/50 focus-visible:outline-0 focus:ring  focus:ring-cyan-400/50 transition-all duration-400 p-2"
            >
              Add New Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddInventory;
