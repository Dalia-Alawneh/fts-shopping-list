import PageHeader from "../../components/shared/PageHeader/PageHeader.jsx"
import Input from "../../components/ui/Input/Input.jsx"
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
