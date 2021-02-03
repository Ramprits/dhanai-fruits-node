import { userLoginTypes } from "../constants/user.constant";

const initialState = {
  userInfo: undefined,
  loading: false,
  errorMessage: ""
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userLoginTypes.USER_LOGIN_START:
      return Object.assign({}, state, {
        loading: true,
        errorMessage: ""
      });
    case userLoginTypes.USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: "",
        userInfo: payload
      });

    case userLoginTypes.USER_LOGIN_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: payload
      });

    default:
      return state;
  }
};
