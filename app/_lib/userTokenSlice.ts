import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    token: string | null
} = {
    token: null,
}

export const userTokenSlice = createSlice({
    name: 'userToken',
    initialState,
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