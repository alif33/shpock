import { userSlice } from "./slice";
const { actions: slice } = userSlice;

export const userSignup = () => (dispatch) => {
  dispatch(slice.userSignup())
}

export const userLogin = (token) => (dispatch) => {
  dispatch(slice.userLogin(token))
}

export const userLogout = () => (dispatch) => {
  dispatch(slice.userLogout())
}
