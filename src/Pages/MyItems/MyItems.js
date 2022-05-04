import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";
import InventoryDetailsCard from "../InventoryDetails/InventoryDetailsCard/InventoryDetailsCard";

const MyItems = () => {
  const [products, setProducts] = useState([]);
  const [state, setState] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const url = `http://localhost:5000/mybook/?email=${user.email}`;
    // const url = `https://book-buddy01.herokuapp.com/book`;
    (async () => {
      axios.get(url).then((res) => {
        // console.log(id);
        setProducts(res.data.result);
      });
    })();
  }, [user, state]);

  const handleDelete = (id) => {
    const url = `https://book-buddy01.herokuapp.com/book/${id}`;
    // const url = `http://localhost:5000/book/${id}`;

    (async () => {
      await axios.delete(url).then((res) => {
        // console.log(res.data.message);
        toast(res.data.message);
        setState(!state);
      });
    })();
  };

  return (
    <div>
      <h1>Here is my Items</h1>
      {products.map((product) => (
        <InventoryDetailsCard product={product}>
          <button
            onClick={() => handleDelete(product._id)}
            className="text-center rounded-lg  bg-rose-500 hover:bg-rose-600 hover:text-white hover:ring  hover:ring-rose-500/50 focus-visible:outline-0 focus:ring  focus:ring-rose-500/50 transition-all duration-400 p-2 px-5"
          >
            Delete
          </button>
        </InventoryDetailsCard>
      ))}
    </div>
  );
};

export default MyItems;
