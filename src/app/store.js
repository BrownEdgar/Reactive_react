
import counterSlice from '@/Counter/counterSlice';
import rdobject from '@/RdObject/rdobject';
import usersSlice from '@/Users/usersSlice';
import { configureStore } from '@reduxjs/toolkit';
import middlewareForHW23 from "../middlewares/wareForHW23";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: usersSlice,
    userbase: rdobject
  },

  middleware: middlewareForHW23
})