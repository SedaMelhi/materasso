import { configureStore } from '@reduxjs/toolkit';
import catalog from './catalogSlice/catalogSlice';
import sale from './saleSlice/saleSlice';
import product from './productSlice/productSlice';
import basket from './basketSlice/basketSlice';
import collection from './collectionSlice/collectionSlice';
import search from './searchSlice/searchSlice';
export const store = configureStore({
  reducer: {
    catalog,
    sale,
    product,
    basket,
    collection,
    search,
  },
});
