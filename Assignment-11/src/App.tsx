// useEffect 1

import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    console.log("Count : ", count);

    return () => {
      console.log("Clean up!");
    };
  }, [count]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center pt-44">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">useEffect</h1>

        <h2 className="text-2xl font-bold mb-6 text-gray-500">
          Counter: <span className="text-white">{count}</span>
        </h2>
        <div className="flex flex-row justify-center items-center">
          <button
            onClick={() => setCount(count + 1)}
            className="m-4 p-2 px-8 rounded-lg border-2 border-gray-400 bg-gray-600 "
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="m-4 p-2 px-8 rounded-lg border-2 border-gray-400 bg-gray-600 "
          >
            Decrement
          </button>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-blue-500">{windowWidth}</h1>
      </div>
    </>
  );
}

export default App;

// case 1: Run on every render
// useEffect(() => {})

// case 2: Run only on first render
// useEffect(() => {}, [])

// case 3: Run only when certain values change
// useEffect(() => {}, [value])
