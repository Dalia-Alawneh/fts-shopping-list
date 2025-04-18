import { CheckCircle2, CheckCircle2Icon } from "lucide-react";
import Modal from "../../../../components/shared/Modal/Modal.jsx";
import Input from "../../../../components/ui/Input/Input.jsx";
import { useContext, useState } from "react";
import { CartContext } from "../../../../context/cartContext.jsx";

const CheckoutForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [orderInfo, setOrderInfo] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {state, dispatch} = useContext(CartContext);
  const openConfirmModal = () => setIsOpen(true);
  const closeConfirmModal = () => setIsOpen(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!orderInfo.name || !orderInfo.email) {
      return;
    }
    openConfirmModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConfirmOrder = () => {
    const fullOrder = {
      customer: orderInfo,
      items: state.cartItems,
    };
  
    console.log("Order submitted:", fullOrder);
    setIsSubmitted(true);
    closeConfirmModal();
  };

  if (isSubmitted) {
    return (
      <div className="my-20 text-center flex flex-col items-center gap-3">
        <CheckCircle2 size={60} className="text-primary-green"/>
        <h2 className="text-2xl font-bold text-primary-green mb-4">Thank you for your order!</h2>
        <div className="text-gray-500">Your order has been submitted successfully. We will contact you soon.</div>
      </div>

    );
  }

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="my-16 flex flex-col gap-3 w-[90%] md:max-w-[450px] m-auto p-6 bg-white shadow-lg rounded-sm"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Checkout Info</h2>
        <Input name="name" type="text" onChange={handleInputChange} placeholder="Name" />
        <Input name="email" type="email" onChange={handleInputChange} placeholder="Email" />
        <button
          type="submit"
          className="w-fit m-auto mt-5 py-2 px-4 rounded-lg bg-primary-green text-white hover:bg-primary-green-dark transition duration-200"
        >
          Confirm
        </button>
      </form>

      <Modal
        title="Confirm Your Checkout"
        description="Are you sure you want to checkout your order?"
        isOpen={isOpen}
        onClose={closeConfirmModal}
        onButtonClick={handleConfirmOrder}
      />
    </>
  );
};

export default CheckoutForm;
