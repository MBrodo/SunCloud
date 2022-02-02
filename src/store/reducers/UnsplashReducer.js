import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UnsplashAPI } from '../../Links';

const initialState = {
  unsplashImg: [],
  requestStatus: '',
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
    [getUnsplashImg.fulfilled]: (state, action) => {
      state.requestStatus = 'finished';
    },
    [getUnsplashImg.pending]: (state, action) => {
      state.requestStatus = 'loading';
    },
    [getUnsplashImg.rejected]: (state, action) => {
      state.requestStatus = 'error';
    },
  },
});

export const { setUnsplashImg } = unsplashReducer.actions;
export default unsplashReducer.reducer;
