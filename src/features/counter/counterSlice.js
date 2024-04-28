import { createSlice } from "@reduxjs/toolkit";
import { compileString } from "sass";

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        addCounter: (state, action) => {
            return state + action.payload;
        }
    }
})

export default counterSlice.reducer;
export const { addCounter } = counterSlice.actions