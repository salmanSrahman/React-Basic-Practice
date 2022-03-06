import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  getRedirectResult,
  signOut,
} from "firebase/auth";
import firebaseAuthentication from "../Firebase/Firebase.Init";

firebaseAuthentication();

const FormAuth = () => {
  const [user, setUser] = useState({});

  const goggleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
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

  const handleFacebookSign = () => {
    getRedirectResult()
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
          <Button onClick={handleGithubSign} className="ms-2 btn-warning">
            Github Sign
          </Button>
          <Button onClick={handleFacebookSign} className="ms-2 btn-danger">
            Facebook Sign
          </Button>
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
