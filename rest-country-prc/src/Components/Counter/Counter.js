import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(20);

  const countIncrease = () => {
    const newCount = counter + 1;
    setCounter(newCount);
  };

  const newPrice = counter * price;
  setPrice(newPrice);

  return (
    <div className="text-center">
      <h1>{counter}</h1>
      <h2>{price}</h2>
      <Button onClick={() => countIncrease()}>Increase</Button>
    </div>
  );
};

export default Counter;
