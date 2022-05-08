import axios from "axios";
import { useEffect, useState } from "react";

const useUpdateQuantity = (id) => {
  const [update, setUpdate] = useState({});

  useEffect(() => {
    // const url = `http://localhost:5000/book/${id}`;
    const url = `https://book-buddy01.herokuapp.com/book/${id}`;
    (async () => {
      await axios.put(url, update).then((res) => {});
    })();
  }, [id, update]);
  return { update, setUpdate };
};

export default useUpdateQuantity;
