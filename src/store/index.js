import { configureStore } from '@reduxjs/toolkit';
import openingsSliceReducer from './modules/openings-slice';

export const store = configureStore({
  reducer: {
    openings: openingsSliceReducer,
  },
});
