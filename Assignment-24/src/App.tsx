// Custom Hooks: useLocalStorage

import { useState } from "react";
import { useLocalStorage } from "./Hooks/useLocalStorage";

function App() {
  const [value, setValue] = useState("");

  const { setItem, getItem, removeItem } = useLocalStorage("Value");

  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center pt-44">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          Custom Hooks - useLocalStorage
        </h1>

        <div className="flex flex-col bg-gray-700 w-2/3 rounded-lg">
          <div className="flex flex-row justify-center items-center m-2 p-2">
            <label htmlFor="task" className="font-bold text-2xl">
              Task :{" "}
            </label>
            <input
              type="text"
              placeholder="Enter Todo or Task"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="p-2 m-4 border-2 rounded-lg w-1/2"
            />
          </div>

          <div className="flex flex-row justify-center items-center gap-2">
            <button
              className="bg-gray-900 p-2 px-8 rounded-lg m-2 mb-8 cursor-pointer"
              onClick={() => setItem(value)}
            >
              Set
            </button>
            <button
              className="bg-gray-900 p-2 px-8 rounded-lg m-2 mb-8 cursor-pointer"
              onClick={() => console.log(getItem())}
            >
              Get
            </button>
            <button
              className="bg-gray-900 p-2 px-8 rounded-lg m-2 mb-8 cursor-pointer"
              onClick={removeItem}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
