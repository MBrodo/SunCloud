import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { OneCallAPI, CurrWeatherAPI } from '../../Links';

const initialState = {
  weatherData: [],
  cityData: [],
  requestStatus: '',
};

export const getWeatherData = createAsyncThunk(
  'data/getWeatherData',
  async (cityCoords, { rejectWithValue, dispatch }) => {
    const resWeatherData = await axios.get(
      OneCallAPI(cityCoords.latitude, cityCoords.longitude),
    );
    dispatch(setWeatherData(resWeatherData.data));
    const resCityData = await axios.get(
      CurrWeatherAPI(cityCoords.latitude, cityCoords.longitude),
    );
    dispatch(setCityData(resCityData.data));
  },
);

const apiReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
    setCityData: (state, action) => {
      state.cityData = action.payload;
    },
  },
  extraReducers: {
    [getWeatherData.fulfilled]: (state, action) => {
      state.requestStatus = 'finished';
    },
    [getWeatherData.pending]: (state, action) => {
      state.requestStatus = 'loading';
    },
    [getWeatherData.rejected]: (state, action) => {
      state.requestStatus = 'error';
    },
  },
});

export const { setWeatherData, setCityData } = apiReducer.actions;
export default apiReducer.reducer;
