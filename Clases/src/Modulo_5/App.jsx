import React from "react";
import {
  ThemeProvider,
  useTheme,
  useSetTheme,
} from "./ThemeProvider";

function App() {


  return (
    <ThemeProvider>
      <Contenido />
    </ThemeProvider>
  );
}

function Contenido(){
  const theme = useTheme();
  const setTheme = useSetTheme();

  return (
    <div
      className={`w-screen h-screen bg-slate-${
        theme === "light" ? "50" : "950"
      } flex justify-center items-center`}>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className='p-4 border-2 bg-slate-400'>
        Cambiar tema
      </button>
    </div>
  );

}

export default App;
