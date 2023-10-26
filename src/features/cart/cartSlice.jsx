import { createSlice, current, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: {
      reducer: (state, action) => {
        const {
          payload: { id, colorSelected, sizeSelected, countSelected },
        } = action;
        const existingItemIndex = current(state).findIndex(
          (item) =>
            item.id === id &&
            item.colorSelected === colorSelected &&
            item.sizeSelected === sizeSelected
        );

        if (existingItemIndex > -1) {
          const existingItem = state[existingItemIndex];
          state[existingItemIndex] = {
            ...existingItem,
            countSelected: countSelected + existingItem.countSelected,
          };
        } else {
          state.push(action.payload);
        }
      },
      prepare: ({
        id,
        colorSelected,
        sizeSelected,
        images,
        name,
        price,
        countSelected,
      }) => {
        return {
          payload: {
            id,
            colorSelected,
            sizeSelected,
            countSelected,
            images,
            name,
            price,
            idCartItem: nanoid(4),
          },
        };
      },
    },
    deleteItem: (state, { payload: idCartItem }) => {
      return current(state).filter((item) => item.idCartItem !== idCartItem);
      // state.splice(0,1)
    },
    addOneCount: (state, { payload: idCartItem }) =>
      current(state).map((item) => {
        if (item.idCartItem === idCartItem)
          return { ...item, countSelected: item.countSelected + 1 };
        return item;
      }),
    reduceOneCount: (state, { payload: idCartItem }) =>
      current(state).map((item) => {
        if (item.idCartItem === idCartItem)
          return { ...item, countSelected: item.countSelected - 1 };
        return item;
      }),
  },
});

export const { addItem, deleteItem, addOneCount, reduceOneCount } = cartSlice.actions;

export default cartSlice.reducer;
export const selectCartItems = (state) => state.cart;
