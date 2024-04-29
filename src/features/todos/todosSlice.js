import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import todosApi from './todosAPI';
import { resetAction } from '@f/counter/counterSlice';

export const getAsyncTodos = createAsyncThunk(
  'todos/getAsyncTodos',
  todosApi
)

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    data: ["one"],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncTodos.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getAsyncTodos.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(getAsyncTodos.rejected, (state, action) => {
        state.status = 'fail';
        state.error = action.error
      })
      .addCase(resetAction, (state, action) => {
        state.data = []
      })
  },
  selectors: {
    getAllTodos: (state) => state
  }
})

export default todosSlice.reducer;
export const { getAllTodos } = todosSlice.selectors
