import { createSlice } from '@reduxjs/toolkit';

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    filters: { categoryId: false, name: '', subId: false, page: 1 },
    product: 0,
  },
  reducers: {
    setFilters(state, { payload }) {
      state.filters = payload;
    },
    setProduct(state, { payload }) {
      state.product = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilters, setProduct } = catalogSlice.actions;

export default catalogSlice.reducer;
