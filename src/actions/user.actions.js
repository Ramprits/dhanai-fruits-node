import axios from "axios";
import {
  userLoginTypes,
  userLogoutTypes,
  userRegisterTypes
} from "../constants/user.constant";
import history from "../helpers/history";

/************* User Login *************/

export const userLoginStart = () => ({
  type: userLoginTypes.USER_LOGIN_START
});
export const userLoginSuccess = (payload) => ({
  type: userLoginTypes.USER_LOGIN_SUCCESS,
  payload
});
export const userLoginFailure = (payload) => ({
  type: userLoginTypes.USER_LOGIN_FAILURE,
  payload
});

export const userLogin = (payload) => async (dispatch) => {
  try {
    dispatch(userLoginStart());
    const { data } = await axios.post("/users/login", payload);
    dispatch(userLoginSuccess(data));
    history.push("/");
  } catch (error) {
    // TODO will solve this duplication here
    if (error.response.status === 401) {
      dispatch(userLoginFailure("Please enter correct email and password"));
    } else {
      dispatch(userLoginFailure(error.message));
    }
  }
};

/************* User Register *************/

export const userRegisterStart = () => ({
  type: userRegisterTypes.USER_REGISTER_START
});
export const userRegisterSuccess = (payload) => ({
  type: userRegisterTypes.USER_REGISTER_SUCCESS,
  payload
});
export const userRegisterFailure = (payload) => ({
  type: userRegisterTypes.USER_REGISTER_FAILURE,
  payload
});

export const userRegister = (payload) => async (dispatch) => {
  try {
    dispatch(userRegisterStart());
    const { data } = await axios.post("/users/register", payload);
    dispatch(userRegisterSuccess(data));
    history.push("/login");
  } catch (error) {
    dispatch(userRegisterFailure(error.response && error.response.data.error));
  }
};

/************* User Log out *************/

export const userLogoutStart = () => ({
  type: userLogoutTypes.USER_LOGOUT_START
});
export const userLogoutSuccess = () => ({
  type: userLogoutTypes.USER_LOGOUT_SUCCESS
});
export const userLogoutFailure = (payload) => ({
  type: userLogoutTypes.USER_LOGOUT_FAILURE,
  payload
});

export const userLogout = () => async (dispatch) => {
  try {
    dispatch(userLogoutStart());
    await axios.post("/users/logout");
    dispatch(userLogoutSuccess());
    history.push("/login");
  } catch (error) {
    dispatch(userLogoutFailure(error));
  }
};
