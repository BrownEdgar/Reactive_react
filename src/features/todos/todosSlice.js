import { createSlice } from "@reduxjs/toolkit";


const makeTodos = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		saveTodos: (state, action) => {
			return action.payload
		}
	},
	selectors: {
		getTodos: (state) => state
	}
})

export default makeTodos.reducer;
export const {saveTodos} = makeTodos.actions
export const {getTodos} = makeTodos.selectors