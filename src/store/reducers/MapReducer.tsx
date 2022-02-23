import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userCoords: {},
  markerCoords: {},
  markerImage: {},
  markersAll: [],
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
    setMarkerImage: (state, action) => {
      state.markerImage = action.payload;
    },
    addMarker: (state, action) => {
      state.markersAll.push(action.payload);
    },
  },
});

export const { setUserCoords, setMarkerCoords, setMarkerImage, addMarker } =
  PhotoMapReducer.actions;

export default PhotoMapReducer.reducer;
