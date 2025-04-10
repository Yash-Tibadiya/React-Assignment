// Prop Drilling

import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar count={count} />
        <div className="flex-1 bg-gray-900 text-white flex flex-col items-center pt-44">
          <h1 className="text-4xl font-bold mb-6 text-blue-500">useContext</h1>

          <div className="flex flex-row justify-center items-center">
            <button
              className="m-4 p-2 px-8 rounded-lg border-2 border-gray-400 bg-gray-600 "
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
