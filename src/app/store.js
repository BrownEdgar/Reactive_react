import {configureStore} from '@reduxjs/toolkit'
import usersSlice from '@f/users/usersSlice'
import todosSlice from '@f/todos/todosSlice'

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    users: usersSlice
  },
})