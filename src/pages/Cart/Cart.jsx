import { useContext } from 'react';
import PageHeader from '../../components/shared/PageHeader/index.js'
import CartItems from './components/CartItems/index.js'
import { CartContext } from '../../context/CartContext.jsx';
import CartTotal from './components/CartTotal/CartTotal.jsx';

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
