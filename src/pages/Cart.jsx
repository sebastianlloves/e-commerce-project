import { useSelector } from "react-redux";
import { selectCartItems } from "../features/cart/cartSlice";
import CartList from "../components/cart/CartList";
import EmptyCart from "../components/cart/EmptyCart";

function Cart() {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="mt-20 min-h-screen w-full ">
      <div className="mx-auto flex max-w-screen-lg flex-col px-4 md:px-10">
        <h2 className="mb-20 bg-gradient-to-r from-azure-950 to-indigo-900/90 bg-clip-text text-center text-5xl font-bold uppercase text-transparent drop-shadow-[0.5px_1px_2px_rgba(61,84,144,0.67)]">
          CARRITO
        </h2>
        
        {cartItems.length > 0 ? <CartList /> : <EmptyCart />}
      </div>
    </div>
  );
}

export default Cart;
