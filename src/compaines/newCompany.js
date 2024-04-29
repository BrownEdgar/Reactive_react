import { createSlice } from "@reduxjs/toolkit";

const newCompany = createSlice ({
    id: '92447',
    name: 'Wintheiser Group Group',
    reducers: {
        companyData: (state, action) => {
            state.push(action.payload)
        }
    },
    date: Date.now()
});

export default newCompany.reducer;
export const { companyData } = newCompany.actions;