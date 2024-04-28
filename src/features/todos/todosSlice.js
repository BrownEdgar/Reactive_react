import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import todosApi from './todosAPI'

export const getAsyncTodos = createAsyncThunk(
	'todos/getAsyncTodos',
	todosApi
)

const makeTodos = createSlice({
	name: 'todos',
	initialState: {
    data: [],
    status: 'idle',
    error:  null
  },
	reducers: {},
	extraReducers: (builder) => {
    builder
    .addCase(getAsyncTodos.pending, (state) => {
      state.status = 'panding'
    })
    .addCase(getAsyncTodos.fulfilled, (state, action) => {
      state.status = 'complete',
      state.data = action.payload
    })
    .addCase(getAsyncTodos.rejected, (state, action) => {
      state.status = 'rejected',
      state.data = action.error
    })
	},
	selectors: {
		getTodos: (state) => state
	}
})

export default makeTodos.reducer;
export const {getTodos} = makeTodos.selectors