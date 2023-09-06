import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBarPropio from "./Components/BarraNavegacion/NavBarPropio.jsx";
import { ProductsProvider } from "./Components/Products/ProductsProvider.jsx";
import { CartProvider } from "./Components/Carrito/CartProvider";
import ListadoTarjetas from "./Components/Products/ListadoTarjetas.jsx";
import CartList from "./Components/Carrito/CartList";
import ProductDetailTailwind from "./Components/Products/ProductDetailTailwind";
import ProductDetail from "./Components/Products/ProductDetail";

export default function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <NavBarPropio />
          <ProductDetail id={2} />
          <ProductDetailTailwind id={3} />
          {/* <Routes>
            <Route path="/" element={<ListadoTarjetas />}>
            </Route>
            <Route path="/cart" element={<CartList />} />
          </Routes> */}
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}
