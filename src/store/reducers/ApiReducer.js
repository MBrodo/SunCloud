import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { OneCallAPI, CurrWeatherAPI } from '../../Links';

const initialState = {
  dataMain: [],
  dataCity: [],
  statusDataMain: '',
  statusDataCity: '',
};

export const getDataMain = createAsyncThunk(
  'data/getDataMain',
  async (cityCoords, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      OneCallAPI(cityCoords.latitude, cityCoords.longitude),
    );
    dispatch(setDataMain(res.data));
  },
);
export const getDataCity = createAsyncThunk(
  'data/getDataCity',
  async (cityCoords, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      CurrWeatherAPI(cityCoords.latitude, cityCoords.longitude),
    );
    dispatch(setDataCity(res.data));
  },
);

const apiReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setDataMain: (state, action) => {
      state.dataMain = action.payload;
    },
    setDataCity: (state, action) => {
      state.dataCity = action.payload;
    },
  },
  extraReducers: {
    [getDataMain.fulfilled]: (state, action) => {
      state.statusDataMain = 'finished';
    },
    [getDataMain.pending]: (state, action) => {
      state.statusDataMain = 'loading';
    },
    [getDataMain.rejected]: (state, action) => {
      state.statusDataMain = 'error';
    },
    [getDataCity.fulfilled]: (state, action) => {
      state.statusDataCity = 'finished';
    },
    [getDataCity.pending]: (state, action) => {
      state.statusDataCity = 'loading';
    },
    [getDataCity.rejected]: (state, action) => {
      state.statusDataCity = 'error';
    },
  },
});

export const { setDataMain, setDataCity } = apiReducer.actions;
export default apiReducer.reducer;
