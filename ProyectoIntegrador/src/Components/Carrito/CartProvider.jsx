import { React, useReducer, useContext, createContext } from "react";

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

const useCart = () => useContext(CartContext);
const useCartDispatch = () => useContext(CartDispatchContext);

export { CartProvider, useCart, useCartDispatch };

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      return cart.some(
        (oC) =>
          oC.id == action.id &&
          oC.colorSelected == action.productSelection.color &&
          oC.sizeSelected == action.productSelection.size
      )
        ? cart.map((oC) => {
            return oC.id == action.id &&
              oC.colorSelected == action.productSelection.color &&
              oC.sizeSelected == action.productSelection.size
              ? {
                  id: oC.id,
                  quantity: oC.quantity + action.productSelection.quantity,
                  colorSelected: action.productSelection.color,
                  sizeSelected: action.productSelection.size,
                }
              : oC;
          })
        : [
            ...cart,
            {
              id: action.id,
              quantity: action.productSelection.quantity,
              colorSelected: action.productSelection.color,
              sizeSelected: action.productSelection.size,
            },
          ];
    }

    case "INCREASE_QUANTITY": {
      return cart.map((oC) =>
        oC.id == action.id &&
        oC.colorSelected == action.color &&
        oC.sizeSelected == action.size
          ? { ...oC, quantity: oC.quantity + 1 }
          : oC
      );
    }

    case "DECREASE_QUANTITY": {
      return cart.map((oC) =>
        oC.id == action.id &&
        oC.colorSelected == action.color &&
        oC.sizeSelected == action.size
          ? { ...oC, quantity: oC.quantity - 1 }
          : oC
      );
    }

    case "REMOVE": {
      return cart.filter(
        (oC) =>
          oC.id !== action.id ||
          oC.colorSelected !== action.color ||
          oC.sizeSelected !== action.size
      );
    }
  }
}
