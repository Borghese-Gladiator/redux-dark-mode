import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMode } from './darkThemeToggleAPI';

const initialState = {
  value: false
};

export const toggleAsync = createAsyncThunk(
  'darkMode/fetchMode',
  async (amount) => {
    const response = await fetchMode(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggle: (state) => {
      console.log(state)
      console.log("MADE IT HERE")
      state.value = !state.value
      console.log("MADE IT HERE?")
      console.log(state)
    }
  }
});

export const { toggle } = darkModeSlice.actions;

export const selectMode = (state) => {
  console.log(state.darkMode)
  console.log("MADE IT FIRST")
  return state.darkMode.value
};

export default darkModeSlice.reducer;
