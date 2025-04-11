import { useContext } from "react";
import { ThemeContext, useToggleTheme } from "../context/context";

const ThemeToggleButton = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const toggleTheme = useToggleTheme();

  return (
    <div>
      <button
        className="m-4 p-2 px-8 rounded-lg border-2 border-gray-400 bg-gray-600"
        onClick={toggleTheme}
      >
        {isDarkMode ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default ThemeToggleButton;
