import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const email = "arif@gmail.com";

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((result) => {
        const myOrders = [];
        for (const data of result) {
          if (data.userEmail == email) {
            myOrders.push(data);
          }
        }
        setOrders(myOrders);
      });
  }, [orders]);
  //cancel handler
  const handleCancel = (id) => {
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount == 1) {
          alert("Deleted successfully");
          const remaining = orders.filter((order) => order.packageId !== id);
          setOrders(remaining);
        }
      });
  };

  const update = (id) => {
    for (const singleOrder of orders) {
      if (singleOrder._id == id) {
        const updatedOrder = { ...singleOrder };
        updatedOrder.status = "Approved";
        console.log(orders);
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
    <div className="container">
      <h1>MY ORDERS</h1>
      {orders.map((order, index) => (
        <div className="d-flex justify-content-between border">
          <div>
            <h3>
              <span>{index + 1}</span>
              {order.title}
            </h3>
          </div>
          <div>
            <h3>{order.price}</h3>
          </div>
          <div className="d-flex">
            <div>
              <button onClick={() => update(order._id)}>{order.status}</button>
            </div>
            <div>
              <button onClick={() => handleCancel(order.packageId)}>
                cancel
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
