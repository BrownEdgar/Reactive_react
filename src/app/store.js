import counterSlice from '@f/counter/counterSlice';
import todosSlice from '@f/todos/todosSlice';
import usersSlice from '@f/users/usersSlice';
import { configureStore } from '@reduxjs/toolkit';
import mainMiddlewaries from '../middlewaries/mainMiddlewaries';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: usersSlice,
    todos: todosSlice
  },
  middleware: mainMiddlewaries
})