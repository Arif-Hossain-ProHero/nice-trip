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
    <div className="mx-auto">
      <button
        onClick={googleSigninHandler}
        class="w-full px-6 py-2 mt-4 text-black bg-white border-solid border-2 border-blue-500  rounded-lg"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
