// useState

import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecriment = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecriment}>-1</button>

      <hr />

      <Counter />
      <Counter />
    </>
  );
}

export default App;
