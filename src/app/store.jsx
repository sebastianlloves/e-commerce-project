import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
// import productsReducer from "../features/products/productsSlice";

const persistanceCartMiddleware = (store) => (next) => (action) =>{
    next(action)
    localStorage.setItem('__cart__store__', JSON.stringify(store.getState().cart))
}


export default configureStore({
    reducer:{
        cart: cartReducer,
        // products: productsReducer
    },
    middleware: [persistanceCartMiddleware]    
})