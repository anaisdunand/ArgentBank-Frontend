import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token") || null,
        isAuthenticated: Boolean(localStorage.getItem("token"))
    },
    reducers: {
        setCredentials: (state, action) => {
            state.token = action.payload.token
            state.isAuthenticated = true
        },
        signOut: (state) => {
            state.token = null
            state.isAuthenticated = false
            localStorage.removeItem("token")
        }
    }
})

export const { setCredentials, signOut } = authSlice.actions
export default authSlice.reducer