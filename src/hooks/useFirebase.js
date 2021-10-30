import initializeAuth from "../firebase/firebase.init";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  initializeAuth();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // sign in using google account
  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, []);

  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setMessage("can not logging out");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    user,
    error,
    logOut,
    googleSignIn,
    message,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
