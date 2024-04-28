import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import todosSlice from '../features/todos/todosSlice';
import usersSlice from '../features/users/usersSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        users: usersSlice,
        todos: todosSlice
    }
})