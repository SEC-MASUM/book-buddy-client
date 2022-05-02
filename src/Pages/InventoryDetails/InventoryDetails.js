import React from "react";
import { useParams } from "react-router-dom";
import useBook from "../../Hooks/useBook";

const InventoryDetails = () => {
  const { id } = useParams();

  const { product, setProduct } = useBook(id);
  console.log(id, product);

  return (
    <div>
      <h1>Inventory Details : </h1>

      <h1>{product.name}</h1>
    </div>
  );
};

export default InventoryDetails;
