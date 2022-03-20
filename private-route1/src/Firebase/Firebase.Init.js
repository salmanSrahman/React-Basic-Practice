import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

const firebaseAuthentication = () => {
  return initializeApp(firebaseConfig);
};
export {firebaseAuthentication };
