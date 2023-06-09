import { createSlice } from '@reduxjs/toolkit';

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    filters: { categoryId: false, name: '', subId: false, page: 1, sort: '' },
  },
  reducers: {
    setFilters(state, { payload }) {
      state.filters = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilters } = catalogSlice.actions;

export default catalogSlice.reducer;
