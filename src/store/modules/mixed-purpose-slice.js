import { createSlice } from '@reduxjs/toolkit';

const initialState = { tvSection: 'about' };

export const mixedPurposeSlice = createSlice({
  name: 'mixedPurpose',
  initialState,
  reducers: {
    changeTvSection: (state, action) => {
      return {
        ...state,
        tvSection: action.payload,
      };
    },
  },
});

export const { changeTvSection } = mixedPurposeSlice.actions;

export default mixedPurposeSlice.reducer;
