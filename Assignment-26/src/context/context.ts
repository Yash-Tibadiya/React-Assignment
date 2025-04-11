import { createContext, useContext } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

export const useToggleTheme = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return toggleTheme;
};
