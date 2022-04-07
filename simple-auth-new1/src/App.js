import "./App.css";
import app from "./firebase.config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(result.user);
      setUser(result.user);
    })
    .then((error) => {
        console.log(error.message);
      });
  };

  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .then((error) => {
        console.log(error.message);
      });
  };

  const googleSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return (
    <div className="App">
      <h1>Authentication</h1>

      {user.displayName}
      {!user.email ? (
        <div>
          <button onClick={googleSignIn}>Google Sign In</button>
          <button onClick={githubSignIn}>Github Sign In</button>
        </div>
      ) : (
        <button onClick={googleSignOut}>Sign Out</button>
      )}
    </div>
  );
}

export default App;
