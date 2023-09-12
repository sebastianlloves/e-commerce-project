import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBarPropio from "./Components/BarraNavegacion/NavBarPropio.jsx";
import { ProductsProvider } from "./Components/Products/ProductsProvider.jsx";
import { CartProvider } from "./Components/Carrito/CartProvider";
import ListadoTarjetas from "./Components/Products/ListadoTarjetas.jsx";
import CartList from "./Components/Carrito/CartList";
import ProductDetail from "./Components/Products/ProductDetail";
import { ProductSelectionProvider } from "./Components/Products/ProductSelectionProvider";

export default function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <NavBarPropio />

          <Routes>
            <Route path="/" element={<ListadoTarjetas />}></Route>
            <Route
              path="/product/:id"
              element={
                <ProductSelectionProvider>
                  <ProductDetail />
                </ProductSelectionProvider>
              }
            />            
            <Route path="/cart" element={<CartList />} />
          </Routes>
          
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}
