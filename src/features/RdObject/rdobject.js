import { createSlice } from '@reduxjs/toolkit';

const rdobject = createSlice({
  name: "rdobject",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    }
  }
})

export default rdobject.reducer
export const { addUser } = rdobject.actions