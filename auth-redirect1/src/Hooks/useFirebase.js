import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import { firebaseInitialization } from "../Firebase/Firebase.init";

firebaseInitialization();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const GoogleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const useGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
    }
  });

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return { user, error, useGoogleSignIn, logOut };
};

export default useFirebase;
