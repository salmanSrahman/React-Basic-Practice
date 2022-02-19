import React from "react";
import Button from "react-bootstrap/Button";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import firebaseAuthentication from "../../Firebase/Firebase.init";

firebaseAuthentication();

const GoogleSign = () => {
  const handleGoogSign = () => {
    const auth = getAuth();
    const googlepPovider = new GoogleAuthProvider();
  };
  return (
    <div className="mt-5">
      <Button onClick={handleGoogSign}>Google Sign In</Button>
    </div>
  );
};

export default GoogleSign;
