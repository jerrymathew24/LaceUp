import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducers/cart-reducer";

const CartContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const CartProvider = ({ children }) => {
  const [{ cart }, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { CartProvider, useCart };
