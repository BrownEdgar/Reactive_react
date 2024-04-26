import { createSlice } from '@reduxjs/toolkit';


const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    }
  }
})

export default usersSlice.reducer;
export const { addUser } = usersSlice.actions;