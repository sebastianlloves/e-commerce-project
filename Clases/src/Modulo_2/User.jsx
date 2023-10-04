import { React, useState } from "react"

export default async function User({id}) {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const [users] = useState(await resp.json())
    const usuario = users.find( u => u.id == id)


    return (
        <div>
            <h2>Nombre: {usuario.name}</h2>
            <h3>Nombre de Usuario: {usuario.username}</h3>
            <h4>Correo: {usuario.email}</h4>
            <h4>Teléfono: {usuario.phone}</h4>
            <h4>Página Web: {usuario.website}</h4>
        </div>
    )
}


