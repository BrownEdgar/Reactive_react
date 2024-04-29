import {createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice ({
    name:"counter",
    initialState: [],
    reducers: {
        plus: (state, action) => {
            return state + action.payload
        },
        minus: (state, action) => {
            return state - action.payload
        },

    }
})

export default counterSlice.reducer
export const {plus} = counterSlice.actions
export const {minus} = counterSlice.actions