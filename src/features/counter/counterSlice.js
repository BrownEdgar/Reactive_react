import { createAction, createSlice } from '@reduxjs/toolkit';


export const resetAction = createAction('reset')


const counterSlice = createSlice({
  name: "counter",
  initialState: 1,
  reducers: {
    addCounter: (state, action) => {
      return state + 1;
    }
  },
  selectors: {
    getCounter: (state) => state
  },
  extraReducers: (builder) => {
    builder.addCase(resetAction, (state, action) => {
      return 0
    })
  }
})

export default counterSlice.reducer
export const { addCounter } = counterSlice.actions
export const { getCounter } = counterSlice.selectors