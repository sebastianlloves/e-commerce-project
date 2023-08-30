import Tarjeta from "./Tarjeta";
<<<<<<< HEAD
import {useState} from 'react'

const initialProducts = [
  {
    id: 1,
    name: "Anteojos Clásicos",
    href: "#",
    imageSrc:
      "../assets/Anteojos/sebastian-coman-travel-dtOTQYmTEs0-unsplash.jpg.webp",
    imageAlt: "Anteojos Playa",
    price: "$ 35.000",
    color: "Negro",
  },
  {
    id: 1,
    name: "Anteojos Clásicos",
    href: "#",
    imageSrc:
      "../assets/Anteojos/sebastian-coman-travel-dtOTQYmTEs0-unsplash.jpg.webp",
    imageAlt: "Anteojos Playa",
    price: "$ 35.000",
    color: "Negro",
  },
  {
    id: 1,
    name: "Anteojos Clásicos",
    href: "#",
    imageSrc:
      "../assets/Anteojos/sebastian-coman-travel-dtOTQYmTEs0-unsplash.jpg.webp",
    imageAlt: "Anteojos Playa",
    price: "$ 35.000",
    color: "Negro",
  },
  {
    id: 1,
    name: "Anteojos Clásicos",
    href: "#",
    imageSrc:
      "../assets/Anteojos/sebastian-coman-travel-dtOTQYmTEs0-unsplash.jpg.webp",
    imageAlt: "Anteojos Playa",
    price: "$ 35.000",
    color: "Negro",
  },
  {
    id: 1,
    name: "Anteojos Clásicos",
    href: "#",
    imageSrc:
      "../assets/Anteojos/sebastian-coman-travel-dtOTQYmTEs0-unsplash.jpg.webp",
    imageAlt: "Anteojos Playa",
    price: "$ 33.000",
    color: "Negro",
  }
]

function ListadoTarjetas() {
  const [products] = useState(initialProducts)
=======
import { useProducts } from "./ProductsContext";

function ListadoTarjetas() {
  const products = useProducts()
>>>>>>> 968e44c431533b7c65acd5bd4aef234f6c60feb7
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Tarjeta key={product.id} product={product} />
        ))}
      </div>
      <div className="hover:opacity-75 opacity-50 hover:scale-150 scale-125"></div>
    </div>
  );
}

export default ListadoTarjetas;
