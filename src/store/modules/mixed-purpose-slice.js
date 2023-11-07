import { createSlice } from '@reduxjs/toolkit';

const initialState = { tvSection: { name: 'about', link: '' }, language: 'en' };

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
        language: {
          name: action.payload.name,
          link: action.payload.link,
        },
      };
    },
  },
});

export const { changeTvSection, changeLangauge } = mixedPurposeSlice.actions;

export default mixedPurposeSlice.reducer;
