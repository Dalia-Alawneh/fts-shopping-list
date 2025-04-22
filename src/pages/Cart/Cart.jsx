import { useContext } from 'react';
import PageHeader from '../../Components/shared/PageHeader'
import CartItems from './Components/CartItems'
import { CartContext } from '../../Context/CartContext.jsx';
import CartTotal from './Components/CartTotal/CartTotal.jsx';

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { cartItems } = state;
  return (
    <>
      <PageHeader title="Shopping Cart" />
      <CartItems cartItems={cartItems} dispatch={dispatch} />
      <CartTotal cartItems={cartItems} />
    </>
  )
}

export default Cart
