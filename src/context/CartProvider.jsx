import { useEffect, useReducer } from "react";
import { cartReducer, initialState } from "../reducers/cartReducer.js";
import { setItemToLocalStorage } from "../utils/localstorage.js";
import { CartContext } from "./CartContext.js";

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  useEffect(() => {
    setItemToLocalStorage('CART', state.cartItems);
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}