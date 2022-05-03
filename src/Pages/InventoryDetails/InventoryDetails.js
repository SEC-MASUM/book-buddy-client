import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import InventoryDetailsCard from "./InventoryDetailsCard/InventoryDetailsCard";
import RestockItem from "./RestockItem/RestockItem";

const InventoryDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [state, setState] = useState(false);
  useEffect(() => {
    // const url = `http://localhost:5000/book/${id}`;
    const url = `https://book-buddy01.herokuapp.com/book/${id}`;
    axios.get(url).then((res) => {
      setProduct(res.data);
    });
  }, [id, state]);

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
        const url = `https://book-buddy01.herokuapp.com/book/${id}`;

        await axios.put(url, body).then((res) => {
          toast(res.data.message);
          setState(!state);
          event.target.reset();
        });
      })();
    } else {
      toast("Please enter positive value");
    }
  };

  const handleDeliver = () => {
    const preQuantity = Number.parseInt(product.quantity);
    if (preQuantity > 0) {
      const body = {
        quantity: preQuantity - 1,
      };
      (async () => {
        // const url = `http://localhost:5000/book/${id}`;
        const url = `https://book-buddy01.herokuapp.com/book/${id}`;

        await axios.put(url, body).then((res) => {
          toast("Delivered successfully");
          setState(!state);
          // event.target.reset();
        });
      })();
    } else {
      toast("Product is out of stock. Please restock this product");
    }
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <InventoryDetailsCard
            handleDeliver={handleDeliver}
            product={product}
          />
        </div>
        <div>
          <RestockItem
            handleUpdateQuantity={handleUpdateQuantity}
            product={product}
          />
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
