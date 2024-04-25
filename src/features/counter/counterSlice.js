import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    addCounter: (state, action) => {
      return state + 1;
    }
  }
})
export default counterSlice.reducer
export const {addCounter} = counterSlice.actions