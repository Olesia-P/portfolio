import { configureStore } from '@reduxjs/toolkit';
import openingsSliceReducer from './modules/openingsSlice';

export const store = configureStore({
  reducer: {
    openings: openingsSliceReducer,
  },
});
