import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    count: 0,
    products: [],
  },
  reducers: {
    setCount(state, { payload }) {
      state.count = payload;
    },
    setProducts(state, { payload }) {
      state.count = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCount, setProducts } = basketSlice.actions;

export default basketSlice.reducer;
