import { React, useState } from "react";
import {
  ComentariosProvider,
  useComentarios,
  useSetComentarios,
} from "./ComentariosProvider";

export function Comentarios() {
  return (
    <ComentariosProvider>
      <Formulario />
      <ListaComentarios />
    </ComentariosProvider>
  );
}

function Formulario() {
  const [entradaComentarios, setEntradaComentarios] = useState("");
  const comentarios = useComentarios();
  const setComentarios = useSetComentarios();

  const handleSubmit = (e) => {
    e.preventDefault();
    setComentarios([...comentarios, entradaComentarios]);
    setEntradaComentarios("");
    console.log(comentarios);
  };

  return (
    <div>
      <form
        className="flex flex-col max-w-lg m-auto p-4"
        onSubmit={handleSubmit}
      >
        <label className="text-center uppercase">Ingresa tu comentario:</label>
        <input
          type="text"
          value={entradaComentarios}
          className="border-2 p-4 m-4"
          onChange={(e) => setEntradaComentarios(e.target.value)}
          placeholder="Escribe tu comentario"
        />
        <button type="submit" className="border-2 border-slate-700 m-4">
          Agregar Comentario
        </button>
      </form>
    </div>
  );
}

function ListaComentarios() {
  const comentarios = useComentarios();

  return (
    <ul className="flex flex-col max-w-lg m-auto p-4 divide-y-2">
      {comentarios.map((c, i) => (
        <li key={i} className="p-2">Comentario {i+1}: {c}</li>
      ))}
    </ul>
  );
}
