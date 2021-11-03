import { createSlice } from "@reduxjs/toolkit"


export const userSlice = createSlice({
    name: "users",
    initialState: {
        token: '',
        isUser: false
    },
    reducers: {
        userSignup: (state, action) => {
            state.isUser = true
        },

        userLogin: (state, action) => {
            return {
                ...state,
                isUser: true,
                token: action.payload
            }
 
        },

        userLogout: (state, action) => {
            return {
                ...state,
                isUser: false,
                token: ''
            }
        }
    }
})
