import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { OneCallAPI, CurrWeatherAPI } from '../../Links';

const initialState = {
  data: [],
  dataCurrent: [],
};

export const getData = createAsyncThunk(
  'data/getData',
  async (cityCoords, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      OneCallAPI(cityCoords.latitude, cityCoords.longitude),
    );
    dispatch(setData(res.data));
  },
);
export const getDataCurrent = createAsyncThunk(
  'data/getDataCurrent',
  async (cityCoords, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      CurrWeatherAPI(cityCoords.latitude, cityCoords.longitude),
    );
    dispatch(setDataCurrent(res.data));
  },
);

const apiReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setDataCurrent: (state, action) => {
      state.dataCurrent = action.payload;
    },
  },
  extraReducers: {
    [getData.fulfilled]: () => console.log('getData.fulfilled'),
    [getData.pending]: () => console.log('getData.pending'),
    [getData.rejected]: () => console.log('getData.rejected'),
    [getDataCurrent.fulfilled]: () => console.log('getDataCurrent.fulfilled'),
    [getDataCurrent.pending]: () => console.log('getDataCurrent.pending'),
    [getDataCurrent.rejected]: () => console.log('getDataCurrent.rejected'),
  },
});

export const { setData, setDataCurrent } = apiReducer.actions;
export default apiReducer.reducer;
