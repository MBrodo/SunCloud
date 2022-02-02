import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { OneCallAPI, CurrWeatherAPI } from '../../Links';

const initialState = {
  weatherForecast: [],
  cityName: [],
  requestStatus: '',
};

export const getWeatherForecast = createAsyncThunk(
  'data/getWeatherForecast',
  async (cityCoords, { rejectWithValue, dispatch }) => {
    const resWeatherForecast = await axios.get(
      OneCallAPI(cityCoords.latitude, cityCoords.longitude),
    );
    dispatch(setWeatherForecast(resWeatherForecast.data));
    const resCityName = await axios.get(
      CurrWeatherAPI(cityCoords.latitude, cityCoords.longitude),
    );
    dispatch(setCityName(resCityName.data));
  },
);

const apiReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setWeatherForecast: (state, action) => {
      state.weatherForecast = action.payload;
    },
    setCityName: (state, action) => {
      state.cityName = action.payload;
    },
  },
  extraReducers: {
    [getWeatherForecast.fulfilled]: (state, action) => {
      state.requestStatus = 'finished';
    },
    [getWeatherForecast.pending]: (state, action) => {
      state.requestStatus = 'loading';
    },
    [getWeatherForecast.rejected]: (state, action) => {
      state.requestStatus = 'error';
    },
  },
});

export const { setWeatherForecast, setCityName } = apiReducer.actions;
export default apiReducer.reducer;
