import { configureStore } from '@reduxjs/toolkit';
import catalog from './catalogSlice/catalogSlice';
import sale from './saleSlice/saleSlice';
import product from './productSlice/productSlice';
export const store = configureStore({
  reducer: {
    catalog,
    sale,
    product,
  },
});
