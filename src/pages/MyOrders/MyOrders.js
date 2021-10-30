import React, { useEffect, useState } from "react";

const MyOrders = () => {
  //   const [packagesId, setPackagesId] = useState([]);
  const [orders, setOrders] = useState([]);
  const email = "arif@gmail.com";
  let count = 0;
  // useEffect(() => {
  //   fetch("http://localhost:5000/orders")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       const myOrders = [];
  //       for (const data of result) {
  //         if (data.userEmail == email) {
  //           fetch(`http://localhost:5000/packages/${data.packageId}`)
  //             .then((res) => res.json())
  //             .then((pack) => {
  //               console.log(pack);
  //               // setOrders(pack);
  //               myOrders.push(pack);
  //             });
  //         }
  //       }
  //       if (myOrders.length > 0) {
  //         setOrders(myOrders);
  //       }
  //     });
  // }, []);

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
  }, []);

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
              <button>{order.status}</button>
            </div>
            <div>
              <button>cancel</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
