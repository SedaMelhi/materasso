import { configureStore } from '@reduxjs/toolkit';
import catalog from './catalogSlice/catalogSlice';
export const store = configureStore({
  reducer: {
    catalog,
  },
});
