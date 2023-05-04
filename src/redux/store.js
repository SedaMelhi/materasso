import { configureStore } from '@reduxjs/toolkit';
import catalog from './catalogSlice/catalogSlice';
import sale from './saleSlice/saleSlice';
export const store = configureStore({
  reducer: {
    catalog,
    sale,
  },
});
