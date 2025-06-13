export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, payload.product],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== payload.id),
      };
    case "RESET_CART":
      return {
        ...state,
        cart: [],
      };
    case "INITIALIZE_CART":
      return {
        ...state,
        cart: payload,
      };

    default:
      return state;
  }
};
