import { createSlice } from '@reduxjs/toolkit';

export const saleSlice = createSlice({
  name: 'sale',
  initialState: {
    page: 1,
  },
  reducers: {
    setPage(state, { payload }) {
      state.page = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPage } = saleSlice.actions;

export default saleSlice.reducer;
