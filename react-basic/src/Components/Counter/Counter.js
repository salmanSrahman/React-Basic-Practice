import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncreaseCounter = () => {
    const newCount = counter + 1;
    setCounter(newCount);
  };
  const handleDecreaseCounter = () => {
    if (counter > 0) {
      const newCount = counter - 1;
      setCounter(newCount);
    }
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleIncreaseCounter()}>Increase</button>
      <button onClick={() => handleDecreaseCounter()}>Decrease</button>
    </div>
  );
};

export default Counter;
