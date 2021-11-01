import React, { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const { isLoading, setIsLoading } = useAuth();

  useEffect(() => {
    fetch("https://gruesome-phantom-41535.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, [allOrders]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      setIsLoading(true);
      const url = `https://gruesome-phantom-41535.herokuapp.com/orders/${id}`;
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
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const update = (id) => {
    for (const singleOrder of allOrders) {
      if (singleOrder._id == id) {
        const updatedOrder = { ...singleOrder };
        updatedOrder.status = "Approved";
        setIsLoading(true);
        fetch(`https://gruesome-phantom-41535.herokuapp.com/orders/${id}`, {
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
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }
  };
  //spinner
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-24">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Manage All Orders</h1>

      <div className="d-flex justify-content-between border bg-primary text-white  mb-3 p-3">
        <div>
          <h4>Package Name</h4>
        </div>
        <div>
          <h4>User Name</h4>
        </div>
        <div className="d-flex">
          <h4>Status</h4>
        </div>
      </div>

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
                <h3 className="text-info">{order.userName.toUpperCase()}</h3>
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
