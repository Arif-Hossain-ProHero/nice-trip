import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://gruesome-phantom-41535.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div className="my-5 container">
      <h1 className="text-center mb-5">Blogs</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
