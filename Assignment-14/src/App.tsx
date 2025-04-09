// useRef

import { useEffect, useRef, useState } from "react";

function App() {
  const [name, setName] = useState<string>("");
  const renderCount = useRef<number>(0);
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function focus() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center pt-44">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">useRef</h1>

        <div className="flex flex-col bg-gray-700 w-1/2 rounded-lg ">
          <h1 className="flex text-2xl font-bold p-2 m-2 mt-5 justify-center items-center">
            Name Input Box
          </h1>

          <div className="flex justify-center items-center mb-5">
            <label htmlFor="task" className="font-bold text-2xl">
              Name :{" "}
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="email"
              className="p-2 m-4 border-2 rounded-lg w-1/2"
              ref={inputRef}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          <button
            className="bg-gray-900 p-2 px-5 rounded-lg"
            onClick={focus}
          >
            Add
          </button>
          </div>
        </div>
        <h2 className="flex text-lg font-bold p-2 m-2 mt-5 justify-center items-center">
          My name is {name}
        </h2>

        <h2 className="flex text-lg font-bold p-2 m-2 mt-5 justify-center items-center">
          RenderCount : {renderCount.current}
        </h2>
      </div>
    </>
  );
}

export default App;
