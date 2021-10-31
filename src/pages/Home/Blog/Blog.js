import React from "react";
import "./Blog.css";

const Blog = (props) => {
  const { img, title, description, date } = props.blog;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{date}</small>
        </div>
        <button className="btn regular-btn">Read More</button>
      </div>
    </div>
  );
};

export default Blog;
