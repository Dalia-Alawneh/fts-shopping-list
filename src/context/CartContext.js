import { createContext } from 'react';

export const CartContext = createContext({
  state: { cartItems: [] },
  dispatch: () => { },
});
