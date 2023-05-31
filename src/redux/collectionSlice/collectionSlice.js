import { createSlice } from '@reduxjs/toolkit';

export const collectionSlice = createSlice({
  name: 'collection',
  initialState: {
    filters: { page: '', collection: '', material: '', color: '', style: '', name: '' },
  },
  reducers: {
    setFilters(state, { payload }) {
      state.filters = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilters } = collectionSlice.actions;

export default collectionSlice.reducer;
