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
    <div className="container mx-auto my-10 flex justify-center">
      <div className="">
        <h1 className="text-center text-[#110A57] text-3xl font-bold underline mb-5">
          Blogs
        </h1>
        <div className=" grid grid-cols-1 p-3 md:grid-cols-2 md:p-0 lg:grid-cols-3 gap-5 py-10">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
