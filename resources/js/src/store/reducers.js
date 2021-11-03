import { combineReducers } from "@reduxjs/toolkit"
import { userSlice } from "../redux/users/slice"
import { SettingSlice } from "../redux/settings/slice"

export const rootReducer = combineReducers({
    users: userSlice.reducer,
    settings: SettingSlice.reducer,

})