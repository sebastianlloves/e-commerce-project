import React, { useState } from "react";

const ArticlesInputs = () => {
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  return (
    <>
      <form className="flex flex-col space-y-4 p-10 bg-white w-1/3">
        <label>Ingrese el ID:</label>
        <input type="number" name="id" value={id} className="border-gray-400 border-2 bg-white"/>

        <label>Ingrese la descripción:</label>
        <input type="text" name="description" value={description} className="border-gray-400 border-2 bg-white mb-4"/>

        <label>Ingrese el stock:</label>
        <input type="number" name="stock" value={stock} className="border-gray-400 border-2 bg-white mb-4"/>

        <label>Ingrese el precio ($):</label>
        <input type="number" name="price" value={price} className="border-gray-400 border-2 bg-white mb-4"/>

        <button type="submit">CARGAR</button>
      </form>
    </>
  );
};

export default ArticlesInputs;
