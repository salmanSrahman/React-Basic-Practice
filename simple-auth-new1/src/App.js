import "./App.css";
import app from "./firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(result.user);
      setUser(result.user);
    });
  };

  return (
    <div className="App">
      <h1>Authentication</h1>
      {user.displayName}
      <button onClick={googleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
