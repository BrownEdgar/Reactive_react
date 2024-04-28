import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncTodos = createAsyncThunk(
    'todos/getAsyncTodos',
     async () => {
        return axios('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => res.data)
})

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        data: [],
        status: 'idle',
    },
    reducers: {
        // saveTodos: (state, action) => {
        //     return action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAsyncTodos.pending, (state, action) => {
            state.status = 'pending'
        })
        .addCase(getAsyncTodos.fulfilled, (state, action) => {
            state.status = 'succsess';
            state.data = action.payload;
        })
        .addCase(getAsyncTodos.rejected, (state, action) => {
            state.status = 'failure'
        })
    },
    selectors: {
        getAllTodos: (state => state.todos)
    }
})

export default todosSlice.reducer;
// export const { saveTodos } = todosSlice.actions
export const { getAllTodos } = todosSlice.selectors