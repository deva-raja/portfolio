import { createSlice } from '@reduxjs/toolkit';

export const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    activeToast: false,
  },
  reducers: {
    showToast: (state, action) => {
      state.activeToast = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showToast } = toastSlice.actions;

export default toastSlice.reducer;
