import React from "react";

const Stat = () => {
  return (
    <div className="d-flex justify-content-evenly my-5">
      <div>
        <p>
          <i class="fas fa-users"></i>
        </p>
        <h1>45,000</h1>
        <h3>CUSTOMERS</h3>
      </div>
      <div>
        <p>
          <i class="fas fa-plane"></i>
        </p>
        <h1>700</h1>
        <h3>DESTINATION</h3>
      </div>
      <div>
        <p>
          <i class="fas fa-bus"></i>
        </p>
        <h1>5,000</h1>
        <h3>TOURS</h3>
      </div>
    </div>
  );
};

export default Stat;
