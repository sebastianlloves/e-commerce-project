import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBarPropio from "./Components/BarraNavegacion/NavBarPropio.jsx";
import { ProductsProvider } from "./Components/Products/ProductsProvider.jsx";
import { CartProvider } from "./Components/Carrito/CartProvider";
import Home from "./Components/Products/Home.jsx";
import CartList from "./Components/Carrito/CartList";
import ProductDetail from "./Components/Products/ProductDetail";

export default function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <NavBarPropio />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/product/:id"
              element={
                  <ProductDetail />
              }
            />
            <Route path="/cart" element={<CartList />} />
          </Routes>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}
