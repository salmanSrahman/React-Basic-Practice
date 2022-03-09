import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../useFirebase/useFirebase.init";

firebaseAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState([]);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })

      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    user,
    error,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
