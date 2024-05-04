import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import todosAPI from './todosAPI';

export const getAsyncTodos = createAsyncThunk(
  'todos/getAsyncTodos', 
  todosAPI
  )

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
    status : 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncTodos.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getAsyncTodos.fulfilled, (state, action) => {
        state.status = 'success'
        state.data = action.payload
      })
      .addCase(getAsyncTodos.rejected, (state, action) => {
        state.status = 'fail'
        state.error = action.error
      })
  },
  selectors: {
    getAllTodos: (state) => state
  }
})

export default todosSlice.reducer
export const { getAllTodos } = todosSlice.selectors