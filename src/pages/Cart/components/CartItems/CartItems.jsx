import React, { useContext, useState } from 'react'
import { CartContext } from '../../../../Context/CartContext.jsx';
import Modal from '#Components/shared/Modal';
import CartItemsTable from '../CartItemsTable';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const CartItems = () => {
  const { state } = useContext(CartContext);
  const { cartItems } = state;
  let [isOpen, setIsOpen] = useState(false)
  const { dispatch } = useContext(CartContext);
  const [selectedId, setSelectedId] = useState(null);

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
    toast.success("Product deleted successfully");
    closeConfirmModal()
  }

  const handleIncrement = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id } });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id } });
  };
  const totalAmount = cartItems.reduce((accum, item) =>
    accum + (item.price * item.quantity), 0);
  const totalCount = cartItems.reduce((accum, item) =>
    accum + item.quantity, 0);
  return (
    <div className="overflow-x-auto p-10">
      <CartItemsTable
        cartItems={cartItems}
        openConfirmModal={openConfirmModal}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      {cartItems?.length > 0 && (
        <div className="flex justify-end mt-8 pe-0 lg:pe-10">
          <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold">Total Amount</h4>
              <span className="text-primary-green font-bold text-xl">${totalAmount}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold">Number of Products</h4>
              <span className="text-primary-green font-bold text-xl">{totalCount}</span>
            </div>
            <Link to='/checkout' className="block text-center text-lg w-full py-2 px-4 rounded-lg bg-primary-green text-white hover:bg-primary-green-dark transition duration-200">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
      <Modal title={'Confirm Delete'}
        description={"Are you sure you want to delete this item? This action cannot be undone."}
        isOpen={isOpen}
        onClose={closeConfirmModal}
        onButtonClick={handleDeleteCartItem}
      />
    </div>
  )
}

export default CartItems
