import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import firebaseAuthentication from "../Firebase/Firebase.Init";

firebaseAuthentication();

const FormAuth = () => {
  const [user, setUser] = useState({});

  const goggleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth();

  const handleGoogleSign = () => {
    signInWithPopup(auth, goggleProvider).then((result) => {
      const { displayName, email, photoURL } = result.user;
      const loggedUser = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      setUser(loggedUser);
    });
  };

  const handleGithubSign = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
      const { displayName, email, photoURL } = result.user;
      const loggedUser = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      setUser(loggedUser);
    });
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return (
    <div>
      <h1>Form Auth</h1>
      {!user.email ? (
        <div>
          {" "}
          <Button onClick={handleGoogleSign}>Google Sign</Button>
          <Button onClick={handleGithubSign} className="ms-2">
            Github Sign
          </Button>{" "}
        </div>
      ) : (
        <div>
          {" "}
          <Button onClick={handleSignOut} className="ms-2">
            Sign Out
          </Button>{" "}
        </div>
      )}

      {user.email && (
        <div>
          <img src={user.photo} alt="" />
          <h5>Welcome {user.name}</h5>
          <h6>Your Email: {user.email}</h6>
        </div>
      )}
    </div>
  );
};

export default FormAuth;
