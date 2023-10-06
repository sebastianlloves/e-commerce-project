import { createReducer, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        addToCart: (state) => {

        },
        removeOfCart: (state) => {

        },
    }
})

export const {addToCart, removeOfCart} = cartSlice.actions

export default cartSlice.reducer