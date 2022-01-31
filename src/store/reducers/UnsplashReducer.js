import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UnsplashAPI } from '../../Links';

const initialState = {
  unsplashImg: [],
};

export const getUnsplashImg = createAsyncThunk(
  'unsplashImg/getUnsplashImg',
  async (cityName, { rejectWithValue, dispatch }) => {
    const res = await axios.get(UnsplashAPI(cityName));
    dispatch(setUnsplashImg(res.data));
  },
);

const unsplashReducer = createSlice({
  name: 'unsplashImg',
  initialState,
  reducers: {
    setUnsplashImg: (state, action) => {
      state.unsplashImg = action.payload;
    },
  },
  extraReducers: {
    [getUnsplashImg.fulfilled]: () => console.log('getUnsplashImg.fulfilled'),
    [getUnsplashImg.pending]: () => console.log('getUnsplashImg.pending'),
    [getUnsplashImg.rejected]: () => console.log('getUnsplashImg.rejected'),
  },
});

export const { setUnsplashImg } = unsplashReducer.actions;
export default unsplashReducer.reducer;
