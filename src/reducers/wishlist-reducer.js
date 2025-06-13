export const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, payload.product],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((product) => product.id !== payload.id),
      };
    case "RESET_WISHLIST":
      return {
        ...state,
        wishlist: [],
      };
    case "INITIALIZE_WISHLIST":
      return {
        ...state,
        wishlist: payload,
      };

    default:
      return state;
  }
};
