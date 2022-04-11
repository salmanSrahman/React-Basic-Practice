import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../Firebase.config";

const auth = getAuth(app);

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="text-center">
      <h1>Here is home.</h1>
      <p>{user?.uid ? user.displayName : "Nobody"}</p>
    </div>
  );
};

export default Home;
