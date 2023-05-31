import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [],
    order_total: 0,
  },
  reducers: {
    setBasket(state, { payload }) {
      state.basket = payload;
    },
    setOrderTotal(state, { payload }) {
      state.order_total = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBasket, setOrderTotal } = basketSlice.actions;

export default basketSlice.reducer;
