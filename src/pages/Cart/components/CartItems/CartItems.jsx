import React, { useContext } from 'react'
import { CartContext } from '../../../../context/cartContext.jsx';
import CartItemRow from '../CartItemRow/CartItemRow.jsx';
const CartItems = () => {
  const { state } = useContext(CartContext);
  const { cartItems } = state;

  return (
    <div className="overflow-x-auto p-10">
      <table className="min-w-full">
        <thead className='border-b border-gray-200'>
          <tr>
            <th className="p-2">Image</th>
            <th className="p-2">Product</th>
            <th className="p-2">Price</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-500">
                Your cart is empty.
              </td>
            </tr>
          ) :
            cartItems?.map(item => (
              <CartItemRow key={item.id} item={item} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default CartItems
