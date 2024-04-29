import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '@f/counter/counterSlice';
import todosSlice from '@f/todos/todosSlice';
import usersSlice from '@f/users/usersSlice';
import mainMiddlewaries from '../middlewaries/mainMiddlewaries';



export const store = configureStore({
    reducer: {
        counter: counterSlice,
        users: usersSlice,
        todos: todosSlice,
        compaines: [
            {
              id: '92447',
              name: 'Wintheiser Group Group',
              contact: {
                address: '566 Leonardo Loop',
                phone: '025.415.9443 x5894',
                email: 'Esta36@gmail.com',
              },
            },
            {
              id: '42354',
              name: 'Larson Inc and Sons',
              contact: {
                address: '3089 Waelchi Keys',
                phone: '711.874.8437 x58199',
                email: 'Lloyd_Shanahan73@hotmail.com',
              },
            },
          ],
    },
    middleware: mainMiddlewaries
})