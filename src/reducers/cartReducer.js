export const initialState = {
  cartItems: [],
}

export const cartReducer = (state, action) => {

  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

      if (existingIndex !== -1) {
        const updatedItems = state.cartItems.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          cartItems: updatedItems,
        };
      } else {
        const newCartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];

        return {
          ...state,
          cartItems: newCartItems,
        };
      }
    }
    case 'DELETE_FROM_CART': {
      const updatedCart = state.cartItems.filter(item => item.id !== action.payload.id)
      return {
        ...state,
        cartItems: updatedCart
      }
    }
    default:
      return state;
  }
};

