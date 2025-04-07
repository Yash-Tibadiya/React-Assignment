// Event Handling

import { useState } from "react";
import SelectPayment from "./components/SelectPayment";
import EnterName from "./components/EnterName";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleLog = () => {
    console.log("Hello, I am Yash!");
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <div
        className={`flex flex-col w-full h-screen ${
          isHovered ? "bg-black" : "bg-gray-900"
        }`}
      >
        <h1 className="flex text-2xl font-bold justify-center items-center text-white pt-80 pb-8">
          Hello 👋
        </h1>
        <div className="flex gap-8 text-black items-center justify-center">
          <button
            onClick={handleLog}
            className="text-white font-medium rounded-lg text-sm px-5 py-2.5 m-2 mb-2 bg-gray-800 hover:bg-gray-700"
          >
            Button 1
          </button>
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="text-white font-medium rounded-lg text-sm px-5 py-2.5 m-2 mb-2 bg-gray-800 hover:bg-gray-700"
          >
            Button 2
          </button>

          {/* <Button onClick={handleLog}>Button 1</Button>
          <Button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Button 2
          </Button> */}
        </div>

        <EnterName />

        <SelectPayment />
      </div>
    </>
  );
}

export default App;
