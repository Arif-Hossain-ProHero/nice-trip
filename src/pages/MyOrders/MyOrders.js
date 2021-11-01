import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  //fetch all data from orders API
  useEffect(() => {
    fetch("https://gruesome-phantom-41535.herokuapp.com/orders")
      .then((res) => res.json())
      .then((result) => {
        const myOrders = [];
        for (const data of result) {
          if (data.userEmail == user.email) {
            myOrders.push(data);
          }
        }
        setOrders(myOrders);
      });
  }, [orders]);
  //cancel handler
  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `https://gruesome-phantom-41535.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount == 1) {
            alert("Deleted successfully");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">MY ORDERS</h1>
      <div className="d-flex justify-content-between border bg-primary text-white  mb-3 p-3">
        <div>
          <h4>Package Name</h4>
        </div>
        <div>
          <h4>Price</h4>
        </div>
        <div className="d-flex">
          <h4>Action</h4>
        </div>
      </div>
      {orders.length ? (
        orders.map((order, index) => (
          <div className="d-flex justify-content-between border  mb-3 p-3">
            <div>
              <h3>
                <span className="pe-3">{index + 1}.</span>
                {order.title}
              </h3>
            </div>
            <div>
              <h3 className="text-info">{order.price}</h3>
            </div>
            <div className="d-flex">
              <div>
                <button
                  className="bg-danger border-0 text-white"
                  onClick={() => handleDelete(order._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-warning">
          <h3>Opps! Your Cart is Empty</h3>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
