import { configureStore } from '@reduxjs/toolkit';
// Slices
import navbarReducer from '../navbar/navbarSlice';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer
  },
});