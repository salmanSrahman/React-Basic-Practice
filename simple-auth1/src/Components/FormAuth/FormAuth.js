import React from "react";
import { Button } from "react-bootstrap";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseAuthentication from "../Firebase/Firebase.Init";

firebaseAuthentication();

const formAuth = () => {
  const goggleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleGoogleSign = () => {
    signInWithPopup(auth, goggleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  return (
    <div>
      <h1>Form Auth</h1>
      <Button onClick={handleGoogleSign}>Google Sign</Button>
    </div>
  );
};

export default formAuth;
