import { configureStore } from '@reduxjs/toolkit';
import toastReducer from './toastSlice';
import focusReducer from './focusSlice';

export default configureStore({
  reducer: {
    toast: toastReducer,
    focus: focusReducer,
  },
});
