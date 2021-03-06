import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import firebaseAuthentication from "../../Firebase/Firebase.init";
import { Container } from "react-bootstrap";

firebaseAuthentication();

const GoogleSign = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const handleGoogSign = () => {
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
  // ======= signing by google =======

  const handleGithubSign = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider).then((result) => {
      const { displayName, email, photoURL } = result.user;
      const loggedUser = {
        name: displayName,
        email: email,
        img: photoURL,
      };
      setUser(loggedUser);
    });
  };
  // ======= signing by github =======

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  //   ====== sign out part =======

  return (
    <Container>
      <div className="mt-5">
        {!user.name ? (
          <div>
            <Button onClick={handleGoogSign} className="me-2">
              Google Sign In
            </Button>
            <Button variant="success" onClick={handleGithubSign}>
              Github Sign In
            </Button>
          </div>
        ) : (
          <div>
            <Button variant="warning" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        )}
        <br />
        {user.email && (
          <div>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <img src={user.img} alt="" />
          </div>
        )}
      </div>
    </Container>
  );
};

export default GoogleSign;
