export const addressReducer = (state, action) => {
  switch (action.type) {
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "RESET_ADDRESS":
      return {
        ...state,
        address: {},
      };
    default:
      return state;
  }
};
