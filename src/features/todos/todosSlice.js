import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodos: (state, action) => {
      return action.payload
    }
  }
})

export default todosSlice.reducer
export const { addTodos } = todosSlice.actions