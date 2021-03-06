import React from "react";
import useBook from "../../Hooks/useBook";
import Loading from "../../Pages/Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const { products, setProducts } = useBook("limit", "6");

  if (products.length === 0) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto">
      <div className="my-10 min-w-[300px]">
        <h1 className="text-center text-[#110A57] text-3xl font-bold underline mb-5">
          Top Six Books
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
