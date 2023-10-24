import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
        state.push( action.payload)
    },
    deleteItem: (state, {id}) => {
      state = state.filter(item => item.id !== id)
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer
