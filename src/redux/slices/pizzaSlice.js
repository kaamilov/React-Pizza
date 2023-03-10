import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  itemss: [],
  totalPrice: 0,
  status: null,
  error: null,
};
export const fetchPizza = createAsyncThunk(
  "filters/fetchPizza",
  async (param, { rejectWithValue }) => {
    const { currentPage, сategery, sortBy, order, search } = param;
    try {
      const { data, status } = await axios.get(
        `https://63dca73bc45e08a0435d8ab3.mockapi.io/items?page=${currentPage}&limit=4&${сategery}&sortBy=${sortBy}&order=${order}${search}`
      );
      if (!status === 200) {
        return new Error("Server Error");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const pizzaSlices = createSlice({
  name: "filters",
  initialState,

  extraReducers: {
    [fetchPizza.pending]: (state) => {
      state.status = "loading";
      state.itemss = [];
    },
    [fetchPizza.fulfilled]: (state, action) => {
      state.itemss = action.payload;
      state.status = "filfilled";
    },
    [fetchPizza.rejected]: (state, action) => {
      state.error = action.payload;
      state.itemss = [];
    },
  },
});
export const selectorPizza = (state) => state.pizza;
export const { setPizza } = pizzaSlices.actions;
export default pizzaSlices.reducer;
