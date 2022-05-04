import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
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
  }, [state]);

  return (
    <div>
      <h1>Here is my Items</h1>
      {products.map((product) => (
        <InventoryDetailsCard product={product}>
          <button>children Button</button>
        </InventoryDetailsCard>
      ))}
    </div>
  );
};

export default MyItems;
