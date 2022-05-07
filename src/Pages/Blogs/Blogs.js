import axios from "axios";
import React, { useEffect, useState } from "react";
import Blog from "../Blogs/Blog/Blog";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("blogs.json");
      setBlogs(data);
    })();
  }, []);
  return (
    <div className="container mx-auto">
      <div className="container mx-auto ">
        <div className=" grid grid-cols-3 gap-4 py-10">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
