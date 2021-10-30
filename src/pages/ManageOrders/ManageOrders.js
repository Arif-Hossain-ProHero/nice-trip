import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount == 1) {
          alert("Deleted successfully");
          const remaining = allOrders.filter((order) => order._id !== id);
          setAllOrders(remaining);
        }
      });
  };

  return (
    <div>
      <h1>Manage All Orders</h1>
      <div>
        {allOrders.map((order, index) => (
          <div className="d-flex justify-content-between border">
            <div>
              <h3>
                <span>{index + 1}</span>
                {order.title}
              </h3>
            </div>
            <div>
              <h3>{order.userName}</h3>
            </div>
            <div className="d-flex">
              <div>
                <button onClick={() => handleDelete(order._id)}> Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
