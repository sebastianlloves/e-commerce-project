import "./App.css";
import { useState } from "react";

function App() {
  const [claridad, setClaridad] = useState(true);
  function cambiarTema () {
    setClaridad(!claridad)
  }


  return (
    <div className="flex-col gap-10 flex-wrap">
      <h1 className="flex-grow ">{claridad? 'Claro' : 'Oscuro'}</h1>
      <div className="flex justify-center gap-4">
        <button className="border px-4 py-3 rounded" onClick={cambiarTema}>Cambiar Tema</button>
      </div>
    </div>
  );
}

export default App;
