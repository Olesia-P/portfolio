import { createSlice } from '@reduxjs/toolkit';
import { eng } from '../../utils/language-objects';

const initialState = {
  tvSection: ' ',
  language: 'en',
  content: eng,
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
        language: action.payload,
      };
    },
    changeContent: (state, action) => {
      return {
        ...state,
        content: action.payload,
      };
    },
  },
});

export const { changeTvSection, changeLangauge, changeContent } =
  mixedPurposeSlice.actions;

export default mixedPurposeSlice.reducer;
