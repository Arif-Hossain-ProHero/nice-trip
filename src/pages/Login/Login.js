import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

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
    <div className="d-flex justify-content-center align-content-center">
      <div class="card" style={{ width: "25rem" }}>
        <div class="card-body">
          <h5 class="card-title text-center py-4">PLEASE LOGIN</h5>
          <div class="card-text text-center">
            <i class="fas fa-user-tie fs-1 text-primary"></i>
          </div>
          <div className="my-3 text-center">
            <button
              className="btn border-warning fw-bold"
              onClick={googleSigninHandler}
            >
              <span>
                <i class="fab fa-google fw-bold text-primary pe-3"></i>
              </span>{" "}
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div className="d-flex justify-content-center align-content-center">
    //   <button onClick={googleSigninHandler} className="">
    //     Sign in with Google
    //   </button>
    // </div>
  );
};

export default Login;
