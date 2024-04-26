import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    addCounter: (state, action) => {
      return state + action.payload;
    }
  },
  selectors: {
    getCounter: (state) => state
  }
})

export default counterSlice.reducer
export const { addCounter } = counterSlice.actions
export const { getCounter } = counterSlice.selectors