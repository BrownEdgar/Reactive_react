import {createSlice} from "@reduxjs/toolkit"

const usersSlice = createSlice( {
    name: "users",
    initialState: [],
    reducers: {
        fetchUsers: (state , action) => {
            return action.payload
        }
    }
})

export default usersSlice.reducer
export const {fetchUsers} = usersSlice.actions