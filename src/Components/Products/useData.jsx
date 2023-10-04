import { useState, useEffect } from "react";
import { axiosClient } from "../../axios/axiosClient";



export default function useData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axiosClient.get('/products')
        setProducts(result.data)
      } catch (error) {
        console.log(error)
      }
    })()
  
    return () => {
      
    }
  }, [])
  
  return products;
}
/* 
function formatearData(data) {
  const arr_stock = [true, false];
  const arr_colors = [
    { name: "Negro", clase: "bg-slate-900", selectedClass: "ring-gray-400" },
    {
      name: "Gris Oscuro",
      clase: "bg-gray-900",
      selectedClass: "ring-gray-400",
    },
    { name: "Marrón", clase: "bg-amber-950", selectedClass: "ring-gray-400" },
    {
      name: "Azul Marino",
      clase: "bg-sky-800",
      selectedClass: "ring-gray-400",
    },
    {
      name: "Rojo",
      clase: "bg-red-900",
      selectedClass: "ring-gray-400",
    },
    {
      name: "Amarillo",
      clase: "bg-amber-400",
      selectedClass: "ring-gray-400",
    },
    {
      name: "Verde",
      clase: "bg-emerald-800",
      selectedClass: "ring-gray-400",
    },
  ];

  const dataFormateada = data.map((p) => {
    return {
      id: p.id,
      name: p.title,
      href: "#",
      images: [{ src: p.image, alt: p.title }],
      price: p.price.toFixed(2),
      description: p.description,
      sizes: [
        {
          name: "XS",
          inStock: arr_stock[Math.floor(Math.random() * arr_stock.length)],
        },
        {
          name: "S",
          inStock: arr_stock[Math.floor(Math.random() * arr_stock.length)],
        },
        {
          name: "M",
          inStock: arr_stock[Math.floor(Math.random() * arr_stock.length)],
        },
        {
          name: "L",
          inStock: arr_stock[Math.floor(Math.random() * arr_stock.length)],
        },
        {
          name: "XL",
          inStock: arr_stock[Math.floor(Math.random() * arr_stock.length)],
        },
        {
          name: "2XL",
          inStock: arr_stock[Math.floor(Math.random() * arr_stock.length)],
        },
      ],
      colors: arr_colors
        .map((obj_color) => (Math.random() > 0.5 ? obj_color : null))
        .filter((el) => el !== null)
        .slice(0, 3),
    };
  });

  return dataFormateada;
} */

