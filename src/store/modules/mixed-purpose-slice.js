import { createSlice } from '@reduxjs/toolkit';

const initialState = { tvImage: '/gifs/white-noise.gif' };

export const mixedPurposeSlice = createSlice({
  name: 'mixedPurpose',
  initialState,
  reducers: {
    changeTvImage: (state, action) => {
      return {
        ...state,
        tvImage: action.payload,
      };
    },
  },
});

export const { changeTvImage } = mixedPurposeSlice.actions;

export default mixedPurposeSlice.reducer;
