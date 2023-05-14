import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
  },
  reducers: {
    setBasket(state, { payload }) {
      state.basket = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBasket } = basketSlice.actions;

export default basketSlice.reducer;
