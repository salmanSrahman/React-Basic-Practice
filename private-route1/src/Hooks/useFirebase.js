import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/Firebase.Init";

firebaseAuthentication();

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

  return { user, signInUsingGoogle, logOut };
};

export default useFirebase;
