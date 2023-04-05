import { configureStore } from '@reduxjs/toolkit';
import textSlice from './textSlice';

const store = configureStore({
  reducer: {
    message: textSlice,
  },
});

export default store;