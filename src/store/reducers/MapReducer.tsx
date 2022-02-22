import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userCoords: {},
  markerCoords: {},
};

export const PhotoMapReducer = createSlice({
  name: 'photoMap',
  initialState,
  reducers: {
    setUserCoords: (state, action) => {
      state.userCoords = action.payload;
    },
    setMarkerCoords: (state, action) => {
      state.markerCoords = action.payload;
    },
  },
});

export const { setUserCoords, setMarkerCoords } = PhotoMapReducer.actions;

export default PhotoMapReducer.reducer;
