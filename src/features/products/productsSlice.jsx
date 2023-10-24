import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../axios/axiosClient";

export const getProductsThunk = createAsyncThunk("products/get", async () => {
  try {
    const response = await axiosClient.get("/products");
    return response.data;
  } catch (error) {
    throw Error(error);
  }
});

const initialState = {
  loading: false,
  error: false,
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.products = action.payload;
      });
  },
});

export default productsSlice.reducer;
