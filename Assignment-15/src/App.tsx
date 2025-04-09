// useRef 2

import { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<number>(0);

  const handleIncrement = () => {
    setCount(count + 1); // if i remove the useState "count" not change - not rerender
    countRef.current++;

    console.log("State :", count);
    console.log("Ref :", countRef.current);
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center pt-44">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">useRef 2</h1>

        <div className="flex flex-col bg-gray-700 w-1/2 rounded-lg justify-center items-center">
          <h1 className="flex text-2xl font-bold p-2 m-2 mt-5 justify-center items-center">
            Count[state] : {count}
            <br />
            Count[Ref] : {countRef.current}
          </h1>
          <button
            className="bg-gray-900 p-2 w-24 rounded-lg mb-5"
            onClick={handleIncrement}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
