import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import useBook from "../../Hooks/useBook";
import ProductCard from "../ProductCard/ProductCard";

const Search = () => {
  const { products } = useBook("", "");
  const [searchBooks, setSearchBooks] = useState([]);

  const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase();
    if (searchText !== "") {
      const matchBook = products.filter((book) =>
        book.name.toLowerCase().includes(searchText)
      );
      setSearchBooks(matchBook);
      console.log(searchBooks);
    } else {
      setSearchBooks([]);
    }
  };
  return (
    <div className="px-3 md:px-0 my-10">
      <div className="min-w-[300px]  bg-amber-400  rounded-lg">
        <div className=" flex justify-center p-3">
          <div className="min-w[300px] w-11/12 md:w-4/6 relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <HiSearch className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              id="search"
              onChange={handleSearch}
              className="bg-white border-0 rounded-lg hover:bg-white hover:text-cyan-800 hover:ring  hover:ring-white/50  focus:ring  focus:ring-white/50 block  w-full  pl-10 p-2.5  "
              placeholder="Search by book title"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {searchBooks.length > 0
          ? searchBooks.map((searchBook) => (
              <ProductCard key={searchBook._id} product={searchBook} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default Search;
