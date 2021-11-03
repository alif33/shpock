import { SettingSlice } from "./slice";
const { actions: slice } = SettingSlice;


export const toggleModal = (status) => (dispatch) => {
  dispatch(slice.toggle(status))
}

export const attemptToSignup = () => (dispatch) => {
  dispatch(slice.switchToSignup())
}

export const attemptToLogin = () => (dispatch) => {
  dispatch(slice.switchToLogin())
}

export const attemptToForget = () => (dispatch) => {
  dispatch(slice.switchToForget())
}
