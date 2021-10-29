import React from "react";
import "./Package.css";

const Package = (props) => {
  const { title, description, img, price, packages } = props.pack;
  return (
    <div class="card col mb-3" style={{ maxWidth: "540px" }}>
      <div class="row g-0">
        <div class="col-md-5">
          <img src={img} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <p class="card-text">
              <small class="text-muted">{price}</small>
            </p>
          </div>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Package;
