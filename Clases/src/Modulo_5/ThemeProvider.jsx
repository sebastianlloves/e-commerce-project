import { React, useContext, createContext, useState } from "react";

const ThemeContext = createContext(null);
const SetThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
    console.log(theme)
  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>
        {children}
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}


function useSetTheme() {
  return useContext(SetThemeContext);
}

export {ThemeProvider, useTheme, useSetTheme}