import React from "react";
import { Container, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center my-5 py-5">
          <Spinner animation="grow" variant="warning" />
        </div>
      </Container>
    </div>
  );
};

export default Loading;
