import {  configureStore } from '@reduxjs/toolkit';
import usersSlice from '@f/users/usersSlice';
import todosSlice from '@f/todos/todosSlice';
import counterSlice from '@f/counter/counterSlice';
import mainMiddlewaries from '../middlewares/mainMiddlewares';


export const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: usersSlice,
    todos: todosSlice,
  },
  middleware: mainMiddlewaries
})
