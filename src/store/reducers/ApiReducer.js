import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../consts/HomeConsts';

const initialState = {
  data: [],
  dataCurrent: [],
};

const apiReducer = createSlice({
  name: data,
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setDataCurrent: (state, action) => {
      state.dataCurrent = action.payload;
    },
  },
});

export const { setData, setDataCurrent } = apiReducer.actions;
export default apiReducer.reducer;
