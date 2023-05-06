import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    id: 1,
  },
  reducers: {
    setProductId(state, { payload }) {
      state.id = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductId } = productSlice.actions;

export default productSlice.reducer;
