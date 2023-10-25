import { configureStore } from '@reduxjs/toolkit';
import openingsSliceReducer from './modules/openings-slice';
import mixedPurposeReducer from './modules/mixed-purpose-slice';

export const store = configureStore({
  reducer: {
    openings: openingsSliceReducer,
    mixedPurpose: mixedPurposeReducer,
  },
});
