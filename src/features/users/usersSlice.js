import { createSlice } from "@reduxjs/toolkit";


const usersSlice =  createSlice({
  name: 'users',
  initialState: [],
  reducers: () => {
    addUser: (state, action) => {
      state.push(action.payload)
    }
  }
})