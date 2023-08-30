import "./App.css";
import { useState } from "react";
import { usersContext, useUsers, data} from './UsuariosContext'

function App() {
  const [users] = useState(data)
  const [idActivo] = useState(8)

  return (
    <usersContext.Provider value={[users, idActivo]}>
      <User>
        <Address>
          <Company/>
        </Address>
      </User>
    </usersContext.Provider>
  );
}


function User({children}) {
  const data = useUsers()[0]
  const id = useUsers()[1]
  const user = data.find((user) => user.id === id);

  return (
    <div>
      <p>
        <bold>Nombre:</bold> {user.name}
      </p>
      <p>
        <bold>Usuario:</bold> {user.username}
      </p>
      <p>
        <bold>Correo:</bold> {user.email}
      </p>
      <p>
        <bold>Teléfono:</bold> {user.phone}
      </p>
      <p>
        <bold>Página web:</bold> {user.website}
      </p>
      {children}
    </div>
  );
}

function Address ({children}){
  const data = useUsers()[0];
  const id = useUsers()[1]
  const user = data.find((user) => user.id === id);

  return (
    <div>
      <p>
        <bold>Calle:</bold> {user.address.street}
      </p>
      <p>
        <bold>Ciudad:</bold> {user.address.city}
      </p>
      {children}
    </div>
  );
}

function Company (){
  const data = useUsers()[0];
  const id = useUsers()[1]
  const user = data.find((user) => user.id === id);

  return (
    <div>
      <p>
        <bold>Nombre Compañía:</bold> {user.company.name}
      </p>
    </div>
  );
}


export default App;
