import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    saveTodos: (state, action) => {
      return action.payload
    }
  }
})

export default todosSlice.reducer
export const { saveTodos } = todosSlice.actions