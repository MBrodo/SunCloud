import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userLocation: [],
};

export const PhotoMapReducer = createSlice({
  name: 'PhotoMap',
  initialState,
  reducers: {
    setUserLocation: (state, action) => {
      state.userLocation = action.payload;
    },
  },
});

export const { setUserLocation } = PhotoMapReducer.actions;

export default PhotoMapReducer.reducer;
