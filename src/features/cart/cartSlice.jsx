import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
    },
    deleteItem: (state, { id }) => {
      state = state.filter((item) => item.id !== id);
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer
export const selectCartItems = state => state.cart