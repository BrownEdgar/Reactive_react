import counterSlice from '@f/counter/counterSlice';
import todosSlice from '@f/todos/todosSlice';
import usersSlice from '@f/users/usersSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainMiddlewaries from '../middlewaries/mainMiddlewaries';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducers = combineReducers({
  counter: counterSlice,
  users: usersSlice,
  todos: todosSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)