import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  сategoryId: 0,
  currentPage: 1,
  sort: { name: "популярности", sort: "rating" },
};

const filterSlices = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.сategoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});
export const selectorFilter = (state)=>state.filter
export const { setCategoryId, setSort, setCurrentPage } = filterSlices.actions;
export default filterSlices.reducer;
