import { Link } from "react-router-dom";

const CartTotal = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((accum, item) =>
    accum + (item.price * item.quantity), 0);
  const totalCount = cartItems.reduce((accum, item) =>
    accum + item.quantity, 0);

  return (
    <>
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
    </>
  )
}

export default CartTotal
