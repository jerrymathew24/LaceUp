export const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case "NAME":
      return {
        ...state,
        name: payload.value,
      };
    case "EMAIL":
      return {
        ...state,
        email: payload.value,
      };
    case "PASSWORD":
      return {
        ...state,
        password: payload.value,
      };
    case "TOKEN":
      return {
        ...state,
        token: payload.token,
      };
    case "LOGOUT":
      return {
        name: "",
        email: "",
        password: "",
        token: "",
      };
    case "RESET_SIGNUP_FORM":
      return {
        ...state,
        name: "",
        email: "",
        password: "",
      };
    case "RESET_LOGIN_FORM":
      return {
        ...state,
        email: "",
        password: "",
      };

    default:
      return state;
  }
};
