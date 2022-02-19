import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseAuthentication from "../../Firebase/Firebase.init";

firebaseAuthentication();

const GoogleSign = () => {
  const [user, setUser] = useState({});

  const handleGoogSign = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) => {
      const { displayName, email, photoURL } = result.user;
      console.log(result.user);
      const loggedUser = {
        name: displayName,
        email: email,
        img: photoURL,
      };
      setUser(loggedUser);
    });
  };
  return (
    <div className="mt-5">
      <Button onClick={handleGoogSign}>Google Sign In</Button>
      <br />
      {user.email && (
        <div>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
          <img src={user.img} alt="" />
        </div>
      )}
    </div>
  );
};

export default GoogleSign;
