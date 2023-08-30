import { createContext, useContext, useState } from "react";

const ProductsContext = createContext(null)

function ProductsProvider ({children}){
  const [products] = useState(data_products);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}



function useProducts () {
  return useContext(ProductsContext)
}

export {ProductsProvider, useProducts}





const data_products = [
  {
    id: 1,
    name: "Anteojos Clásicos",
    href: "#",
    imageSrc:
      "../assets/Anteojos/sebastian-coman-travel-dtOTQYmTEs0-unsplash.jpg.webp",
    imageAlt: "Anteojos Playa",
    price: "$ 35000",
    color: "Negro",
    quantity: 4,
  },
  {
    id: 2,
    name: "Anteojos Clásicos",
    href: "#",
    imageSrc:
      "../assets/Anteojos/sebastian-coman-travel-dtOTQYmTEs0-unsplash.jpg.webp",
    imageAlt: "Anteojos Playa",
    price: "$ 35000",
    color: "Negro",
    quantity: 2,
  },
  {
    id: 3,
    name: "Anteojos Clásicos",
    href: "#",
    imageSrc:
      "../assets/Anteojos/sebastian-coman-travel-dtOTQYmTEs0-unsplash.jpg.webp",
    imageAlt: "Anteojos Playa",
    price: "$ 35000",
    color: "Negro",
    quantity: 1,
  },
  {
    id: 4,
    name: "Anteojos Clásicos",
    href: "#",
    imageSrc:
      "../assets/Anteojos/sebastian-coman-travel-dtOTQYmTEs0-unsplash.jpg.webp",
    imageAlt: "Anteojos Playa",
    price: "$ 35000",
    color: "Negro",
    quantity: 14,
  },
];
