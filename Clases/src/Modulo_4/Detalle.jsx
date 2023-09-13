import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from "./Data";

const Detalle = () => {
    const id = Number(useParams().id)
    const user = data.find(u => u.id === id)

    console.log(user)

  return (
    <div className='p-6 border m-4 w-80'>
      <p>
        <span className='font-bold italic'>ID: </span> 
        {user.id}
      </p>
      <p>
        <span className='font-bold italic'>NOMBRE: </span> 
        {user.name}
      </p>
      <p>
        <span className='font-bold italic'>CORREO: </span> 
        {user.email}
      </p>
      <p>
        <span className='font-bold italic'>NOMBRE DE USUSARIO: </span> 
        {user.username}
      </p>
    </div>
  );
}

export default Detalle