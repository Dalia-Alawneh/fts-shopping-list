import { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { CartContext } from '../../../../Context/CartContext.jsx';
import { ShoppingCartIcon } from 'lucide-react';

const CartNavLink = () => {
  const { state } = useContext(CartContext);
  const { cartItems } = state;
  return (
    <NavLink to='/cart' className={`relative w-fit mt-5 md:mt-0 ${({ isActive }) =>
      isActive
        ? "text-primary-green font-bold hover:text-primary-green"
        : "text-gray-700 dark:text-white hover:text-primary-green"
      }`}>
      <span className='absolute -right-2 -top-2.5 w-5 h-5 text-xs flex justify-center items-center rounded-full
      bg-primary-green-dark text-white'>{cartItems.length}</span>
      <ShoppingCartIcon />
    </NavLink>
  )
}

export default CartNavLink
