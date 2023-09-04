import { React, createContext, useContext, useState } from "react";

const ProductsContext = createContext(null);

function ProductsProvider({ children }) {
  const [products] = useState(data_products);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  return useContext(ProductsContext);
}

export { ProductsProvider, useProducts };

const data_products = [
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
    colors: [{ name: "Gris Oscuro", class: "bg-gray-900" }],
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
  Minima magni harum est quaerat sapiente odio exercitationem voluptatibus dolorum ipsum, quas incidunt aut voluptate in quidem, tempore praesentium assumenda quis deserunt ducimus commodi. Animi eveniet nisi pariatur labore a!
  Reiciendis pariatur molestiae laborum cumque? Cupiditate dolor, hic aspernatur fugit aut, dignissimos magni temporibus at sit error, ad corporis quibusdam possimus nemo sunt eveniet? Quo nemo velit minima eaque odio.`
  },
  {
    id: 2,
    name: "Zapatillass Nike",
    href: "#",
    images: [
      {
        src: "../assets/Calzado/andres-jasso-PqbL_mxmaUE-unsplash.jpg",
        alt: "Anteojos Playa",
      },
    ],
    price: "$ 72600",
    colors: [{ name: "Negro", class: "bg-slate-900" }],
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
  Minima magni harum est quaerat sapiente odio exercitationem voluptatibus dolorum ipsum, quas incidunt aut voluptate in quidem, tempore praesentium assumenda quis deserunt ducimus commodi. Animi eveniet nisi pariatur labore a!
  Reiciendis pariatur molestiae laborum cumque? Cupiditate dolor, hic aspernatur fugit aut, dignissimos magni temporibus at sit error, ad corporis quibusdam possimus nemo sunt eveniet? Quo nemo velit minima eaque odio.`
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
    colors: [{ name: "Marrón", class: "bg-amber-950" }],
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
  Minima magni harum est quaerat sapiente odio exercitationem voluptatibus dolorum ipsum, quas incidunt aut voluptate in quidem, tempore praesentium assumenda quis deserunt ducimus commodi. Animi eveniet nisi pariatur labore a!
  Reiciendis pariatur molestiae laborum cumque? Cupiditate dolor, hic aspernatur fugit aut, dignissimos magni temporibus at sit error, ad corporis quibusdam possimus nemo sunt eveniet? Quo nemo velit minima eaque odio.`
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
    colors: [{ name: "Azul Marino", class: "bg-sky-800" }],
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
  Minima magni harum est quaerat sapiente odio exercitationem voluptatibus dolorum ipsum, quas incidunt aut voluptate in quidem, tempore praesentium assumenda quis deserunt ducimus commodi. Animi eveniet nisi pariatur labore a!
  Reiciendis pariatur molestiae laborum cumque? Cupiditate dolor, hic aspernatur fugit aut, dignissimos magni temporibus at sit error, ad corporis quibusdam possimus nemo sunt eveniet? Quo nemo velit minima eaque odio.`
  },
];
