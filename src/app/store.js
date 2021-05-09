import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import darkModeReducer from '../features/darkThemeToggle/darkThemeToggleSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    darkMode: darkModeReducer
  },
});