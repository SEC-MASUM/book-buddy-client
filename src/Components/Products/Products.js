import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // const url = `https://book-buddy01.herokuapp.com/book`;
    const url = `http://localhost:5000/book`;
    (async () => {
      axios.get(url).then((res) => setProducts(res.data.result));
    })();
  }, []);
  return (
    <div className="container mx-auto">
      <div className="my-10">
        <div className="grid grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
