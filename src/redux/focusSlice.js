import { createSlice } from '@reduxjs/toolkit';

export const focusSlice = createSlice({
  name: 'toast',
  initialState: {
    shouldFocus: false,
  },
  reducers: {
    setFocus: (state, action) => {
      state.shouldFocus = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFocus } = focusSlice.actions;

export default focusSlice.reducer;
