import React from "react";

const Stat = () => {
  return (
    <div className="bg-info py-3">
      <div className="d-flex justify-content-evenly my-5 text-center">
        <div>
          <p>
            <i className="fas fa-users fs-1 text-white"></i>
          </p>
          <h1 className="text-warning">45,000</h1>
          <h4>CUSTOMERS</h4>
        </div>
        <div>
          <p>
            <i className="fas fa-plane fs-1 text-white"></i>
          </p>
          <h1 className="text-warning">700</h1>
          <h3>DESTINATION</h3>
        </div>
        <div>
          <p>
            <i className="fas fa-bus fs-1 text-white"></i>
          </p>
          <h1 className="text-warning">5,000</h1>
          <h3>TOURS</h3>
        </div>
      </div>
    </div>
  );
};

export default Stat;
