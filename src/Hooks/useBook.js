import axios from "axios";
import { useEffect, useState } from "react";

const useBook = (id) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [state, setState] = useState(false);
  useEffect(() => {
    const url = `http://localhost:5000/book/${id || ""}`;
    (async () => {
      axios.get(url).then((res) => {
        setProducts(res.data.result);
        setProduct(res.data);
      });
    })();
  }, [id, state]);
  return { products, setProducts, product, setProduct, state, setState };
};

export default useBook;