import { React, useState, createContext, useContext } from "react";

const ComentariosContext = createContext(null);
const SetComentariosContext = createContext(null);

export function ComentariosProvider({ children }) {
  const [comentarios, setComentarios] = useState([]);

  return (
    <ComentariosContext.Provider value={comentarios}>
      <SetComentariosContext.Provider value={setComentarios}>
        {children}
      </SetComentariosContext.Provider>
    </ComentariosContext.Provider>
  )
}

export function useComentarios() {
  return useContext(ComentariosContext);
}

export function useSetComentarios() {
  return useContext(SetComentariosContext);
}
