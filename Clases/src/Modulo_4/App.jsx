import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Maestro from "./Maestro";
import Detalle from "./Detalle";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Maestro />} />
        <Route path='/user/:id' element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
