
import counterSlice from '@/Counter/counterSlice';
import usersSlice from '@/Users/usersSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: usersSlice
  }
})