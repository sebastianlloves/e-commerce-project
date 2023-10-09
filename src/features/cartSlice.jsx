import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
        state.push( action.payload)
    },
    modifyCart: (state, action) => {

    },
  },
});

export const { addToCart, modifyCart } = cartSlice.actions

export default cartSlice.reducer
