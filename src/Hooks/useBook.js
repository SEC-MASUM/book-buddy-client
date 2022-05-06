import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Pages/Loading/Loading";

const useBook = (path, value) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [state, setState] = useState(false);
  useEffect(() => {
    const query = `${path}/${value} `;
    // const url = `http://localhost:5000/book/${path ? query : ""}`;
    const url = `https://book-buddy01.herokuapp.com/book/${path ? query : ""}`;
   
    (async () => {
      await axios.get(url).then((res) => {
        // console.log(res);
        // setProducts(res.data.result);
        if (path !== "id") {
          setProducts(res.data.result);
        } else {
          setProduct(res.data);
        }
      });
    })();
  }, [path, state, value]);
  return { products, setProducts, product, setProduct, state, setState };
};

export default useBook;
