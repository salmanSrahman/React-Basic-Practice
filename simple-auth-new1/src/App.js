import "./App.css";
import app from "./firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function App() {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(result.user);
    });
  };

  return (
    <div className="App">
      <h1>Authentication</h1>
      <button onClick={googleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
