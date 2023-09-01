import React from "react";
import "./App.css";
import NavBarPropio from "./Components/BarraNavegacion/NavBarPropio.jsx";
import { ProductsProvider } from "./Components/ProductsContext.jsx";
import { CartProvider } from "./Components/CartProvider";
import ListadoTarjetas from "./Components/ListadoTarjetas.jsx";
import CartList from "./Components/Carrito/CartList";

export default function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <NavBarPropio />
        <ListadoTarjetas />
        <CartList className="bg-slate-50" />
      </CartProvider>
    </ProductsProvider>
  );
}
