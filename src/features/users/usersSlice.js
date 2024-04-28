import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUsers: (state, action) => {
            return action.payload
        }
    }
})

export default usersSlice.reducer;
export const {addUsers} = usersSlice.actions;
