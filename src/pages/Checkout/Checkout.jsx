import PageHeader from "../../Components/shared/PageHeader/PageHeader.jsx"
import Input from "../../Components/ui/Input/Input.jsx"
import CheckoutForm from "./Components/CheckoutForm/CheckoutForm.jsx"

const Checkout = () => {
  return (
    <div>
      <PageHeader title="Complete Your Purchase" />
      <CheckoutForm />
    </div>
  )
}

export default Checkout
