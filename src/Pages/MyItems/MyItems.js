import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import ConfirmDeleteModal from "../../Components/ConfirmDeleteModal/ConfirmDeleteModal";
import auth from "../../Firebase/Firebase.init";
import InventoryDetailsCard from "../InventoryDetails/InventoryDetailsCard/InventoryDetailsCard";
import Loading from "../Loading/Loading";

const MyItems = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [state, setState] = useState(false);
  const [user, userLoading, error] = useAuthState(auth);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const url = `http://localhost:5000/myBook/?email=${user.email}`;

    const url = `https://book-buddy01.herokuapp.com/myBook/?email=${user.email}`;
    (async () => {
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        setProducts(data.result);
      } catch (error) {
        // console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    })();
  }, [user.email, navigate, state]);

  if (loading) {
    return <Loading />;
  }

  const handleState = () => {
    setState(!state);
  };

  // const handleDelete = (id) => {
  //   const url = `https://book-buddy01.herokuapp.com/book/${id}`;
  //   // const url = `http://localhost:5000/book/${id}`;

  //   (async () => {
  //     await axios.delete(url).then((res) => {
  //       // console.log(res.data.message);
  //       toast(res.data.message);
  //       setState(!state);
  //     });
  //   })();
  // };

  return (
    <div className="container mx-auto">
      <div className="min-w-[300px] w-full my-10">
        <h1 className="text-center text-[#110A57] text-3xl font-bold underline mb-5">
          My Items
        </h1>
        <div>
          {products.map((product) => (
            <InventoryDetailsCard
              key={product._id}
              product={product}
              handleState={handleState}
            >
              <ConfirmDeleteModal
                handleState={handleState}
                productId={product._id}
                loading={loading}
                setLoading={setLoading}
              />
            </InventoryDetailsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyItems;
