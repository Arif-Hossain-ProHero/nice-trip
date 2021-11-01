import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Order = () => {
  const { user } = useAuth();
  const [pack, setPack] = useState([]);
  const { id } = useParams();
  const nameRef = useRef();
  const emailRef = useRef();
  const priceRef = useRef();
  const titleRef = useRef();
  //fetching single package
  useEffect(() => {
    const url = `https://gruesome-phantom-41535.herokuapp.com/packages/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPack(data);
      });
  }, []);

  const handleSubmit = (e) => {
    const packageId = id;
    const userName = nameRef.current.value;
    const userEmail = emailRef.current.value;
    const title = titleRef.current.value;
    const price = priceRef.current.value;
    const orderDetail = {
      packageId,
      userName,
      userEmail,
      title,
      price,
      status: "pending",
    };
    const url = `https://gruesome-phantom-41535.herokuapp.com/orders`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetail),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order Placed Successfully");
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">ORDER NOW</h2>
      <div className="d-flex flex-md-row flex-column">
        <div className="w-50">
          <form onSubmit={handleSubmit}>
            {/* user name */}
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                ref={nameRef}
                value={user.displayName || ""}
                readOnly
              />
            </div>
            {/* email */}
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                ref={emailRef}
                value={user.email || ""}
                readOnly
              />
            </div>
            {/* address */}
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Address"
              />
            </div>
            {/* phone */}
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Phone Number"
              />
            </div>
            {/* date */}
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Date"
              />
            </div>
            {/* pacakge title */}
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Package Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={pack.title || ""}
                ref={titleRef}
                readOnly
              />
            </div>
            {/* price */}
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={pack.price || ""}
                ref={priceRef}
                readOnly
              />
            </div>
            <input
              className="regular-btn border-0 p-2 rounded"
              type="submit"
              value="Place Order"
            />
          </form>
        </div>
        <div className="ms-3 w-50">
          {/* <h2>PACKAGE DETAILS</h2> */}
          <img className="img-fluid" src={pack.img} alt="" />
          <h4 className="mt-2">
            <span className="text-success">Package Name:</span> {pack.title}
          </h4>
          <p>{pack.description}</p>
          <h4 className="mt-2">
            <span className="text-success">Package Duration:</span>{" "}
            {pack.packages}
          </h4>
          <h5>
            <span className="text-success  pe-2">Price:</span>
            {pack.price}
          </h5>
          <p>
            <span className="text-success pe-2">Ratings:</span>
            {pack.ratings}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
