import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuth = () => {
  return initializeApp(firebaseConfig);
};

export default initializeAuth;
