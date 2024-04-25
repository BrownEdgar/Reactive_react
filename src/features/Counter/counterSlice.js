import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    plusCount: (state,action) => {
      return state + action.payload
    },
    minusCount: (state, action) => {
      return state - action.payload
    },
  }
})

export default counterSlice.reducer
export const { plusCount } = counterSlice.actions
export const { minusCount } = counterSlice.actions