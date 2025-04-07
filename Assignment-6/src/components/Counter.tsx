import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecriment = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecriment}>-1</button>
    </div>
  );
};

export default Counter;
