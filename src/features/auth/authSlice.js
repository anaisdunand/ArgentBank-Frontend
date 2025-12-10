import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token") || null
    },
    reducers: {
        signIn: (state, action) => {
            state.token = action.payload.token
        },
        signOut: (state) => {
            state.token = null
            localStorage.removeItem("token")
        }
    }
})

export const { signIn, signOut } = authSlice.actions
export default authSlice.reducer