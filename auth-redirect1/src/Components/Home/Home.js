import React from "react";
import useAuth from "../../Hooks/useContext";
import "./Home.css";

const Home = () => {
  const { user } = useAuth();
  return (
    <div className="my-5">
      {user.email && <h5>User: {user?.displayName}</h5>}
      <h1>This is home.</h1>
    </div>
  );
};
export default Home;
