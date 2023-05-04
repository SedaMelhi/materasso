import { createSlice } from '@reduxjs/toolkit';

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    filters: { categoryId: false, name: '', subId: false, page: 1 },
    // categoryId: false,
    // name: '',
    product: 0,
    // subId: false,
    // page: 1,
  },
  reducers: {
    setFilters(state, { payload }) {
      state.filters = payload;
    },
    // setCategoryId(state, { payload }) {
    //   state.categoryId = payload;
    // },
    // setName(state, { payload }) {
    //   state.name = payload;
    // },
    setProduct(state, { payload }) {
      state.product = payload;
    },
    // setSubId(state, { payload }) {
    //   state.subId = payload;
    // },
    // setPage(state, { payload }) {
    //   state.page = payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setFilters, setProduct } = catalogSlice.actions;

export default catalogSlice.reducer;
