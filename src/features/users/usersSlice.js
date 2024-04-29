import { resetAction } from '@f/counter/counterSlice';
import { createSlice } from '@reduxjs/toolkit';


const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resetAction, (state, action) => {
      return []
    })
  }
})

export default usersSlice.reducer;
export const { addUser } = usersSlice.actions;