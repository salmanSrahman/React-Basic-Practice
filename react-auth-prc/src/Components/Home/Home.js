import React from "react";
import useAuth from "../../Hooks/useAuth";
import "./Home.css";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>This Is Home.</h1>
      {user?.email && <h2>User: {user.displayName}</h2>}
    </div>
  );
};

export default Home;
