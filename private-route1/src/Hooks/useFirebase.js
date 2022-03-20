import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import firebaseAuthentication from "../Firebase/Firebase.Init";



firebaseAuthentication()

const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
      console.log(result.user);
    });
  };

  return { user, signInUsingGoogle };
};

export default useFirebase;
