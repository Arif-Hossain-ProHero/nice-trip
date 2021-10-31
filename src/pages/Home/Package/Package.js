import React from "react";
import { Link } from "react-router-dom";
import "./Package.css";

const Package = (props) => {
  const { _id, title, description, img, price, packages } = props.pack;
  return (
    <div className="card col mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-5">
          <img src={img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title text-primary">{title}</h5>
            <p className="card-text">{description.slice(0, 70)}...</p>
            <p className="card-text">
              <p className="fw-bold price">{price}</p>
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
