import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { firebaseInitialization } from "../Firebase/Firebase.init";

firebaseInitialization();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const GoogleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const useGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider).then((result) => {
      setUser(result.user);
    });
  };

  return { user, useGoogleSignIn };
};

export default useFirebase;
