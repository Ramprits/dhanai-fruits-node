import {
  userLoginTypes,
  userLogoutTypes,
  userRegisterTypes
} from "../constants/user.constant";

const initialState = {
  userInfo: {},
  loading: false,
  errorMessage: "",
  isAuthenticated: false
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userLoginTypes.USER_LOGIN_START:
    case userRegisterTypes.USER_REGISTER_START:
      return Object.assign({}, state, {
        loading: true,
        errorMessage: ""
      });
    case userLoginTypes.USER_LOGIN_SUCCESS:
    case userRegisterTypes.USER_REGISTER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: "",
        userInfo: payload,
        isAuthenticated: true
      });

    case userLoginTypes.USER_LOGIN_FAILURE:
    case userRegisterTypes.USER_REGISTER_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: payload,
        isAuthenticated: false
      });
    case userLogoutTypes.USER_LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        userInfo: {},
        loading: false,
        errorMessage: "",
        isAuthenticated: false
      });
    default:
      return state;
  }
};
