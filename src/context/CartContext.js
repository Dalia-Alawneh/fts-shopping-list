import { createContext, useEffect, useReducer } from 'react';
import { setItemToLocalStorage } from '../utils/localstorage.js';
import { cartReducer, initialState } from '../reducers/cartReducer.js';

export const CartContext = createContext({
  state: { cartItems: [] },
  dispatch: () => { },
});

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