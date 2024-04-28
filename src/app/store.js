import {configureStore} from '@reduxjs/toolkit'
import todosSlice from '../features/todos/todosSlice'

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    users: usersSlice
  },
})