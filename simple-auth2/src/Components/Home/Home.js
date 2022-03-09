import React from "react";
import { Container } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";
import "./Home.css";

const Home = () => {
  const { user } = useFirebase();
  return (
    <div>
      <Container>
        <h1 className="text-center">This is home.</h1>
        {user.email ? (
          <h2 className="text-center">User : {user.displayName}</h2>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default Home;
