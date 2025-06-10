export const AuthReducer = (state, { type, payload }) => {
  switch (type) {
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
        email: "",
        password: "",
        token: "",
      };
    case "FIRSTNAME":
      return {
        ...state,
        firstName: payload.value,
      };
    case "LASTNAME":
      return {
        ...state,
        lastName: payload.value,
      };
    default:
      return state;
  }
};
