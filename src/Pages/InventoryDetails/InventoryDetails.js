import React from "react";
import { useParams } from "react-router-dom";
import useBook from "../../Hooks/useBook";
import Loading from "../Loading/Loading";
import InventoryDetailsCard from "./InventoryDetailsCard/InventoryDetailsCard";
import RestockItem from "./RestockItem/RestockItem";

const InventoryDetails = () => {
  const { id } = useParams();
  const { product, state, setState } = useBook("id", id);
  console.log(id);
  console.log(product);
  if (!product._id) {
    return <Loading />;
  }

  const handleState = () => {
    setState(!state);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
        <div className="lg:col-span-2">
          <InventoryDetailsCard product={product} handleState={handleState} />
        </div>
        <div>
          <RestockItem handleState={handleState} product={product} />
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
