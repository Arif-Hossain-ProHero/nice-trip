import React from "react";
import { Link } from "react-router-dom";
import "./Package.css";

const Package = (props) => {
  const { _id, title, description, img, price, packages } = props.pack;
  return (
    <div class="card col mb-3" style={{ maxWidth: "540px" }}>
      <div class="row g-0">
        <div class="col-md-5">
          <img src={img} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h5 class="card-title text-primary">{title}</h5>
            <p class="card-text">{description.slice(0, 70)}...</p>
            <p class="card-text">
              <p class="fw-bold price">{price}</p>
            </p>
          </div>
          <div className="text-center pb-2">
            <Link to={`/packages/${_id}`}>
              <button className="btn btn-warning ">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
