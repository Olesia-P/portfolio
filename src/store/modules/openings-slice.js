import { createSlice } from '@reduxjs/toolkit';

const initialState = { isMobileMenuOpen: false };

export const openingsSlice = createSlice({
  name: 'openings',
  initialState,
  reducers: {
    changeIsMobileMenuOpen: (state, action) => {
      return {
        ...state,
        isMobileMenuOpen: action.payload,
      };
    },
  },
});

export const { changeIsMobileMenuOpen } = openingsSlice.actions;

export default openingsSlice.reducer;
