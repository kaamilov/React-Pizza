import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalPrice: 0,
  status: null,
  error: null,
};

const cartSlices = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addItems(state, action) {
      const addItem = state.items.find((item) => item.id === action.payload.id);
      if (addItem) {
        addItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, acc) => {
        return acc.price * acc.count + sum;
      }, 0);
    },
    minusItem(state, action) {
      const minus = state.items.find((obj) => obj.id === action.payload);
      if (minus.count > 1) {
        minus.count--;
        state.totalPrice = state.totalPrice - minus.price;
      } else {
        state.items.filter((item) => item.id !== action.payload.id);
      }
    },
    removeItem(state, action) {
      state.items.filter((item) => item.id !== action.payload.id);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});
export const selectorCart = (state)=> state.cart
export const { addItems, removeItem, clearItems, minusItem } =
  cartSlices.actions;
export default cartSlices.reducer;
