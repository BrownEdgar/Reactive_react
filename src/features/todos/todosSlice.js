import { createSlice } from "@reduxjs/toolkit";


const makeTodos = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		saveTodos: (state, action) => {
			return action.payload
		}
	}
})

export default makeTodos.reducer;
export const {saveTodos} = makeTodos.actions