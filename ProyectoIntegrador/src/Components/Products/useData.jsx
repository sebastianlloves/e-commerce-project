import {  useState, useEffect } from "react";

export default function useData(url) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      (async function () {
        try {
          const data = await fetch(url);
          if (!data.ok) throw new Error("Error al hacer fetch");
          const respuesta = await data.json();
          setProducts(formatearData(respuesta));
        } catch (error) {
          console.log(`Error tipo: ${error}`);
        }
      })();
      console.log("Hizo Fetch");
    }

    return () => (ignore = true);
  }, [url]);

  return products
}






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
        .filter((el) => el !== null),
    };
  });

  return dataFormateada;
}

/* const data_products = [
  {
    id: 1,
    name: "Anteojos Clásicos",
    href: "#",
    images: [
      {
        src: "../assets/Anteojos/sebastian-coman-travel-dtOTQYmTEs0-unsplash.jpg.webp",
        alt: "Anteojos Playa",
      },
    ],
    price: "$ 35000",
    colors: [
      {
        name: "Gris Oscuro",
        clase: "bg-gray-900",
        selectedClass: "ring-gray-400",
      },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description: `Non labore nihil autem tempore accusantium ullam ipsam repudiandae, voluptate, doloremque quia itaque veniam excepturi dignissimos minima eaque numquam impedit. Qui fuga id nihil inventore commodi voluptates incidunt accusamus perspiciatis.
  Minima magni harum est quaerat sapiente odio exercitationem voluptatibus dolorum ipsum, quas incidunt aut voluptate in quidem, tempore praesentium assumenda quis deserunt ducimus commodi. Animi eveniet nisi pariatur labore a!`,
  },
  {
    id: 2,
    name: "Zapatillas Nike",
    href: "#",
    images: [
      {
        src: "../assets/Calzado/andres-jasso-PqbL_mxmaUE-unsplash.jpg",
        alt: "Anteojos Playa",
      },
    ],
    price: "$ 72600",
    colors: [
      { name: "Negro", clase: "bg-slate-900", selectedClass: "ring-gray-400" },
      {
        name: "Gris Oscuro",
        clase: "bg-gray-900",
        selectedClass: "ring-gray-400",
      },
      { name: "Marrón", clase: "bg-amber-950", selectedClass: "ring-gray-400" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: false },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: false },
    ],
    description: `Non labore nihil autem tempore accusantium ullam ipsam repudiandae, voluptate, doloremque quia itaque veniam excepturi dignissimos minima eaque numquam impedit. Qui fuga id nihil inventore commodi voluptates incidunt accusamus perspiciatis.
  Minima magni harum est quaerat sapiente odio exercitationem voluptatibus dolorum ipsum, quas incidunt aut voluptate in quidem, tempore praesentium assumenda quis deserunt ducimus commodi. Animi eveniet nisi pariatur labore a!`,
  },
  {
    id: 3,
    name: "Anteojos Modernos",
    href: "#",
    images: [
      {
        src: "../assets/Anteojos/ethan-robertson-SYx3UCHZJlo-unsplash.jpg",
        alt: "Anteojos Playa",
      },
    ],
    price: "$ 61730",
    colors: [
      { name: "Marrón", clase: "bg-amber-950", selectedClass: "ring-gray-400" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: false },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description: `Non labore nihil autem tempore accusantium ullam ipsam repudiandae, voluptate, doloremque quia itaque veniam excepturi dignissimos minima eaque numquam impedit. Qui fuga id nihil inventore commodi voluptates incidunt accusamus perspiciatis.
  Minima magni harum est quaerat sapiente odio exercitationem voluptatibus dolorum ipsum, quas incidunt aut voluptate in quidem, tempore praesentium assumenda quis deserunt ducimus commodi. Animi eveniet nisi pariatur labore a!`,
  },
  {
    id: 4,
    name: "Jean 8",
    href: "#",
    images: [
      {
        src: "../assets/Jeans/alicia-petresc-BciCcl8tjVU-unsplash.jpg",
        alt: "Anteojos Playa",
      },
    ],
    price: "$ 16200",
    colors: [
      {
        name: "Azul Marino",
        clase: "bg-sky-800",
        selectedClass: "ring-gray-400",
      },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description: `Non labore nihil autem tempore accusantium ullam ipsam repudiandae, voluptate, doloremque quia itaque veniam excepturi dignissimos minima eaque numquam impedit. Qui fuga id nihil inventore commodi voluptates incidunt accusamus perspiciatis.
  Minima magni harum est quaerat sapiente odio exercitationem voluptatibus dolorum ipsum, quas incidunt aut voluptate in quidem, tempore praesentium assumenda quis deserunt ducimus commodi. Animi eveniet nisi pariatur labore a!`,
  },
];
 */
