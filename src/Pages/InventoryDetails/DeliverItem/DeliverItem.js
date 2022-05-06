import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const DeliverItem = ({ product, handleState }) => {
  const handleDeliver = () => {
    const preQuantity = Number.parseInt(product.quantity);
    if (preQuantity > 0) {
      const body = {
        quantity: preQuantity - 1,
      };
      (async () => {
        // const url = `http://localhost:5000/book/${id}`;
        const url = `https://book-buddy01.herokuapp.com/book/${product._id}`;

        await axios.put(url, body).then((res) => {
          handleState(); // setState(!state);
          toast("Delivered successfully");
        });
      })();
    } else {
      toast("Product is out of stock. Please restock this product");
    }
  };
  return (
    <div>
      <button
        onClick={handleDeliver}
        className=" text-center rounded-lg  bg-amber-400 hover:bg-amber-500 hover:text-white hover:ring  hover:ring-amber-400/50 focus-visible:outline-0 focus:ring  focus:ring-amber-400/50 transition-all duration-400 p-2 px-5"
      >
        Delivered
      </button>
    </div>
  );
};

export default DeliverItem;
