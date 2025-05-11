import { createSlice } from "@reduxjs/toolkit";

export const userTokenSlice = createSlice({
    name: 'userToken',
    initialState: {
        token: null,
    },
    reducers: {
        changeUserToken: (state, action) => {
            state.token = action.payload
        },
        resetUserToken: (state) => {
            state.token = null;
        }
    }
})

export const {changeUserToken, resetUserToken} = userTokenSlice.actions;
export default userTokenSlice.reducer;