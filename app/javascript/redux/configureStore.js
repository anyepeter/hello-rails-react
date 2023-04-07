import { configureStore } from '@reduxjs/toolkit';
import textSlice from './textSlice';

const store = configureStore({
  reducer: {
    value: textSlice,
  },
});


export default store;