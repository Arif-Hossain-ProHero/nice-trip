import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { googleSignIn, setIsLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const redirect_uri = location.state?.from || "/home";

  const googleSigninHandler = () => {
    googleSignIn()
      .then((res) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="d-flex justify-content-center align-content-center mt-5">
      <div className="card" style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center py-4">PLEASE LOGIN</h5>
          <div className="card-text text-center">
            <i className="fas fa-user-tie fs-1 text-primary"></i>
          </div>
          <div className="my-3 text-center">
            <button
              className="btn border-warning fw-bold signin-btn"
              onClick={googleSigninHandler}
            >
              <span>
                <i className="fab fa-google fw-bold text-primary pe-3"></i>
              </span>{" "}
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
