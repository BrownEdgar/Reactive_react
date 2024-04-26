import {  configureStore } from '@reduxjs/toolkit';
import counterSlice from '@/counter/counterSlice'
import usersSlice from '@/users/usersSlice';
import todosSlice from '@/todos/todosSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: usersSlice,
    todos: todosSlice,
  }
})
