import { createSlice } from '@reduxjs/toolkit';

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    categoryId: 1,
    name: '',
    product: 0,
  },
  reducers: {
    setCategoryId(state, { payload }) {
      state.categoryId = payload;
    },
    setName(state, { payload }) {
      state.name = payload;
    },
    setProduct(state, { payload }) {
      state.product = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoryId, setName, setProduct } = catalogSlice.actions;

export default catalogSlice.reducer;
