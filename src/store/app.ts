import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',

    initialState: {
        rail: false,
    },

    reducers: {
        setRail: (state, action) => {
            state.rail = action.payload;
        },
    },
})

export const {
    setRail,
} = appSlice.actions

export default appSlice.reducer