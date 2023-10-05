import React from "react";
import { ProductsProvider } from "./Components/Products/ProductsProvider.jsx";
import { CartProvider } from "./Components/Cart/CartProvider.jsx";
import Navigation from "./routes/Navigation";

export default function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Navigation />
      </CartProvider>
    </ProductsProvider>
  );
}
