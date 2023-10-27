import React, { useState } from "react";
import { addNewArticle } from "../features/articlesSlice";
import { useDispatch } from "react-redux";

const ArticlesInputs = () => {
  const [formData, setFormData] = useState({
    id: "",
    description: "",
    stock: "",
    price: "",
  });
  const { id, description, stock, price } = formData;
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
          dispatch(addNewArticle(formData));
          setFormData({
            id: "",
            description: "",
            stock: "",
            price: "",
          });
        }}
        className="flex w-1/3 flex-col space-y-4 bg-white p-10"
      >
        <label>Ingrese el ID:</label>
        <input
          value={id}
          type="number"
          name="id"
          className="border-2 border-gray-400 bg-white"
          onChange={handleChange}
        />

        <label>Ingrese la descripción:</label>
        <input
          value={description}
          type="text"
          name="description"
          className="mb-4 border-2 border-gray-400 bg-white"
          onChange={handleChange}
        />

        <label>Ingrese el stock:</label>
        <input
          value={stock}
          type="number"
          name="stock"
          className="mb-4 border-2 border-gray-400 bg-white"
          onChange={handleChange}
        />

        <label>Ingrese el precio ($):</label>
        <input
          value={price}
          type="number"
          name="price"
          className="mb-4 border-2 border-gray-400 bg-white"
          onChange={handleChange}
        />

        <button
          disabled={
            id === "" || description === "" || stock === "" || price === ""
          }
          type="submit"
        >
          CARGAR
        </button>
      </form>
    </>
  );
};

export default ArticlesInputs;
