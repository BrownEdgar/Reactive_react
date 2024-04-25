import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addusers: (state, action) => {
      return action.payload
    }
  }
})
export default usersSlice.reducer
export const{addusers} = usersSlice.actions