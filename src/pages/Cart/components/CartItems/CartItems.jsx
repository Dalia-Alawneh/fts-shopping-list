import React, { useContext, useState } from 'react'
import { CartContext } from '../../../../context/cartContext.jsx';
import CartItemRow from '../CartItemRow/CartItemRow.jsx';
import Modal from '../../../../components/shared/Modal/Modal.jsx';
const CartItems = () => {
  const { state } = useContext(CartContext);
  const { cartItems } = state;
  let [isOpen, setIsOpen] = useState(false)
  const { dispatch } = useContext(CartContext);
  const [selectedId , setSelectedId] = useState(null);

  function openConfirmModal(id) {
    setIsOpen(true)
    setSelectedId(id);
  }

  function closeConfirmModal() {
    setIsOpen(false)
  }

  const handleDeleteCartItem = () => {
    dispatch({
      type: "DELETE_FROM_CART",
      payload: { id: selectedId }
    })
    closeConfirmModal()
  }
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
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center p-4 text-gray-500">
                Your cart is empty.
              </td>
            </tr>
          ) :
            cartItems?.map(item => (
              <CartItemRow
                key={item.id}
                item={item}
                onDeleteBtnClick={openConfirmModal}
              />
            ))}
        </tbody>
      </table>
      <Modal title={'Confirm Delete'}
        description={"Are you sure you want to delete this item you will not be abel to revert?!"}
        isOpen={isOpen}
        onClose={closeConfirmModal}
        onButtonClick={handleDeleteCartItem}
      />
    </div>
  )
}

export default CartItems
