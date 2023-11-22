import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tvSection: ' ',
  language: 'en',
};

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
    changeLangauge: (state, action) => {
      return {
        ...state,
        name: action.payload.name,
      };
    },
  },
});

export const { changeTvSection, changeLangauge } = mixedPurposeSlice.actions;

export default mixedPurposeSlice.reducer;
