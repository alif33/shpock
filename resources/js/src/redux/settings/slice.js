import { createSlice } from "@reduxjs/toolkit"


export const SettingSlice = createSlice({
    name: "settings",
    initialState: {
        modal: false,
        login: true,
        signup: false,
        forget: false,
    },
    reducers: {
        toggle: (state, action) => {
            state.modal = !action.payload
        },
        switchToLogin: (state, action) => {
            return {
                ...state,
                modal: true,
                login: false,
                signup: false,
                forget: false
            }
        },
        switchToSignup: (state, action) => {
            return {
                ...state,
                modal: true,
                login: false,
                signup: true,
                forget: false
            }
        },
        switchToForget: (state, action) => {
            return {
                ...state,
                modal: true,
                login: false,
                signup: false,
                forget: true
            }
        },
    }
})
