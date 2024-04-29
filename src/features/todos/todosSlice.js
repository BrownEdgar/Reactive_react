import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import todosAPI from "./todosAPI";

export const getAsyncTodos = createAsyncThunk(
    'todos/getAsyncTodos',
    todosAPI
)

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        // saveTodos: (state, action) => {
        //     return action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAsyncTodos.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(getAsyncTodos.fulfilled, (state, action) => {
            state.status = 'succsess';
            state.data = action.payload;
        })
        .addCase(getAsyncTodos.rejected, (state, action) => {
            state.status = 'failure';
            state.error = action.error;
        })
    },
    selectors: {
        getAllTodos: (state => state.todos)
    }
})

export default todosSlice.reducer;
// export const { saveTodos } = todosSlice.actions
export const { getAllTodos } = todosSlice.selectors