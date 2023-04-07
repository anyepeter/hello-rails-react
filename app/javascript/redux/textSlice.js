import { createSlice } from '@reduxjs/toolkit';
import fetchData from './getData';


const textSlice = createSlice({
  name: 'value',
  initialState: {
    data: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      if (action.payload.success) {
        return { ...state, data: action.payload.data };
      }
      return { ...state, error: action.payload.r };
    });
  },
});

export default textSlice.reducer;