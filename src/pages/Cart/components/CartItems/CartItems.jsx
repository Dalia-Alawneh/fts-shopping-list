import { useState } from 'react'
import Modal from '#Components/shared/Modal';
import CartItemsTable from '../CartItemsTable';
import toast from 'react-hot-toast';
const CartItems = ({cartItems, dispatch}) => {
  let [isOpen, setIsOpen] = useState(false)
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

  return (
    <div className="overflow-x-auto p-10">
      <CartItemsTable
        cartItems={cartItems}
        openConfirmModal={openConfirmModal}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
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
