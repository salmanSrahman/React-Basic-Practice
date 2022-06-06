import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const countIncrease = () => {
    const newCount = counter + 1;
    setCounter(newCount);
  };

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div className="text-center">
      <h1>{counter}</h1>
      <Button onClick={() => countIncrease()}>Increase</Button>
    </div>
  );
};

export default Counter;
