import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import usersSlice from '@/users/usersSlice';
import companiesSlice from '@/companies/companiesSlice';
import rootMiddlewares from '../middlewares/rootMiddlewares';

export const store = configureStore({
   reducer: {
      counter: counterSlice,
      users: usersSlice,
      companies: companiesSlice,
   }, 
   middleware: rootMiddlewares,
})