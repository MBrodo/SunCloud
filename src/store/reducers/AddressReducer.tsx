import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GeocodingAPI } from '../../Links';

const initialState = {
  markerAddress: [],
  requestStatus: '',
};

export const getMarkerAddress = createAsyncThunk(
  'markerAddress/getMarkerAddress',
  async (markerCoords, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      GeocodingAPI(markerCoords.latitude, markerCoords.longitude),
    );
    dispatch(setMarkerAddress(res.data));
  },
);

const apiReducer = createSlice({
  name: 'markerAddress',
  initialState,
  reducers: {
    setMarkerAddress: (state, action) => {
      state.markerAddress = action.payload;
    },
  },
  extraReducers: {
    [getMarkerAddress.fulfilled]: (state, action) => {
      state.requestStatus = 'finished';
    },
    [getMarkerAddress.pending]: (state, action) => {
      state.requestStatus = 'loading';
    },
    [getMarkerAddress.rejected]: (state, action) => {
      state.requestStatus = 'error';
    },
  },
});

export const { setMarkerAddress } = apiReducer.actions;
export default apiReducer.reducer;
