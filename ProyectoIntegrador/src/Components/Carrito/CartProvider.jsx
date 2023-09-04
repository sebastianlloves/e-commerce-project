import { useState, createContext, useContext } from "react";

const CartContext = createContext(null);
const SetCartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(carritoInicial);

  return (
    <CartContext.Provider value={cart}>
      <SetCartContext.Provider value={setCart}>
        {children}
      </SetCartContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useSetCart() {
  return useContext(SetCartContext);
}

const carritoInicial = [
  { id: 1, quantity: 1, colorSelected: "Gris Oscuro", sizeSelected: "XL" },
  { id: 3, quantity: 3, colorSelected: "Marrón", sizeSelected: "M" },
  { id: 4, quantity: 2, colorSelected: "Azul Marino", sizeSelected: "L" },
];
