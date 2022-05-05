import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";
import InventoryDetailsCard from "../InventoryDetails/InventoryDetailsCard/InventoryDetailsCard";

const MyItems = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [state, setState] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const url = `http://localhost:5000/mybook/?email=${user.email}`;
    // const url = `https://book-buddy01.herokuapp.com/book`;
    (async () => {
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setProducts(data.result);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    })();
  }, [user, state, navigate]);

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
