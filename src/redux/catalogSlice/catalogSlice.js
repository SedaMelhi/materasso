import { createSlice } from '@reduxjs/toolkit';

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    categoryId: false,
    name: '',
    product: 0,
    subId: false,
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
    setSubId(state, { payload }) {
      state.subId = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoryId, setName, setProduct, setSubId } = catalogSlice.actions;

export default catalogSlice.reducer;
