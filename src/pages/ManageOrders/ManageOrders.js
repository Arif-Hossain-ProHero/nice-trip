import React, { useState } from "react";
import { useEffect } from "react";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, [allOrders]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
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
    }
  };

  const update = (id) => {
    for (const singleOrder of allOrders) {
      if (singleOrder._id == id) {
        const updatedOrder = { ...singleOrder };
        updatedOrder.status = "Approved";
        console.log(allOrders);
        fetch(`http://localhost:5000/orders/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedOrder),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.modifiedCount == 1) {
              console.log(result);
              alert("Updated Successfully.");
            }
          });
      }
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Manage All Orders</h1>
      <div>
        {allOrders.length ? (
          allOrders.map((order, index) => (
            <div className="d-flex justify-content-between border  mb-3 p-3">
              <div>
                <h3>
                  <span className="pe-3">{index + 1}.</span>
                  {order.title}
                </h3>
              </div>
              <div>
                <h3>{order.userName}</h3>
              </div>
              <div className="d-flex">
                <div>
                  <button
                    className="bg-success border-0 text-white"
                    onClick={() => update(order._id)}
                  >
                    {order.status}
                  </button>
                </div>
                <div>
                  <button
                    className="bg-danger border-0 text-white"
                    onClick={() => handleDelete(order._id)}
                  >
                    {" "}
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-warning">
            <h3>
              <span className="text-primary">Ooops!</span> Nothing to show.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageOrders;
