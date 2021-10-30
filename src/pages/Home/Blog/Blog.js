import React from "react";

const Blog = (props) => {
  const { img, title, description, date } = props.blog;
  return (
    <div class="col">
      <div class="card h-100">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">{date}</small>
        </div>
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
  );
};

export default Blog;
