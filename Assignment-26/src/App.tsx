import { useState } from "react";
import { ThemeContext } from "./context/context";
import ThemeToggleButton from "./components/ThemeToggleButton";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <div
          className={`w-full min-h-screen text-white flex flex-col items-center pt-44 ${
            isDarkMode ? "bg-white" : "bg-gray-900"
          }`}
        >
          <h1 className="text-4xl font-bold mb-6 text-blue-500">
            Theme Toggle App
          </h1>
          <ThemeToggleButton />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
