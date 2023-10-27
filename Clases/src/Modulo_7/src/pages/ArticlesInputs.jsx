import React, { useState } from "react";

const ArticlesInputs = () => {
  const [formData, setFormData] = useState({
    id: "",
    description: "",
    stock: "",
    price: "",
  });

  const handleChange = ({target:{name, value}}) => setFormData({...formData, [name]: value})

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault()
        console.log(formData)
      }} className="flex flex-col space-y-4 p-10 bg-white w-1/3">
        <label>Ingrese el ID:</label>
        <input type="number" name="id" className="border-gray-400 border-2 bg-white" onChange={handleChange}/>

        <label>Ingrese la descripción:</label>
        <input type="text" name="description" className="border-gray-400 border-2 bg-white mb-4" onChange={handleChange}/>

        <label>Ingrese el stock:</label>
        <input type="number" name="stock" className="border-gray-400 border-2 bg-white mb-4" onChange={handleChange}/>

        <label>Ingrese el precio ($):</label>
        <input type="number" name="price" className="border-gray-400 border-2 bg-white mb-4" onChange={handleChange}/>

        <button type="submit">CARGAR</button>
      </form>
    </>
  );
};

export default ArticlesInputs;
