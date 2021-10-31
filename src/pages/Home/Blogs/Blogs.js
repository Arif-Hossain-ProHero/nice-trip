import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div className="container">
      <h1>Blogs</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {blogs.map((blog) => (
          <Blog key={blog.key} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
