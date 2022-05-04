import axios from "axios";
import { useEffect, useState } from "react";

const useUpdateQuantity = (id) => {
  const [update, setUpdate] = useState({});
  console.log(update);
  useEffect(() => {
    const url = `http://localhost:5000/book/${id}`;
    (async () => {
      await axios.put(url, update).then((res) => {
        console.log("from inner update");
      });
    })();
  }, [id, update]);
  return { update, setUpdate };
};

export default useUpdateQuantity;
