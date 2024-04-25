import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
   name: "counter",
   initialState: 0,
   reducers: {
      plusCount: (state) => {
         return state + 1
      },
      lessCount: (state) => {
         return state - 1
      }
   },
   selectors: {
      getCount: (state) => state,
   }
}) 

export default counterSlice.reducer;

export const { plusCount, lessCount } = counterSlice.actions;
export const { getCount } = counterSlice.selectors;