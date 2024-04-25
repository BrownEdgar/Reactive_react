import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
   name: "users",
   initialState: [],
   reducers: {
      setUsers: (state, { payload : users}) => {
         return users;
      },
   },
   selectors: {
      getUsers: (state) => state,
   }
})

export default usersSlice.reducer;

export const { setUsers } = usersSlice.actions;
export const { getUsers } = usersSlice.selectors;