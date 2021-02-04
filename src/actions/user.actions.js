import axios from "axios";
import { userLoginTypes, userRegisterTypes } from "../constants/user.constant";
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
    dispatch(userLoginFailure(error.response && error.response.data.error));
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
