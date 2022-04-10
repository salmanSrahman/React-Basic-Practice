import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../Firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  return { googleSignIn };
};
export default useFirebase;
