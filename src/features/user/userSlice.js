import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        editing: false,
        data: null
    },
    reducers: {
        setUserData: (state, action) => {
            state.data = action.payload
        },
        toggleEditMode: (state) => {
            state.editing = !state.editing
        },
        updateUserData: (state, action) => {
            state.data = {
                ...state.data,
                ...action.payload
            }
        },
        clearUserData: (state) => {
            state.data = null
        }
    }
})

export const { setUserData, toggleEditMode, updateUserData, clearUserData } = userSlice.actions
export default userSlice.reducer