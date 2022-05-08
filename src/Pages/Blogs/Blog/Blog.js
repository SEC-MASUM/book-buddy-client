import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  return (
    <div>
      <div className="min-w-[300px] max-w-lg mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <Link to="">
            <img className="h-56 w-full rounded-t-lg" src={blog.image} alt="" />
          </Link>
          <div className="p-5">
            <Link to="">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                {blog.title}
              </h5>
            </Link>
            <p
              className="font-normal text-gray-700 mb-3"
              dangerouslySetInnerHTML={{ __html: blog.body }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
