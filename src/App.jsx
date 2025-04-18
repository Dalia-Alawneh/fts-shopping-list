import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Navbar from "./components/shared/Navbar/Navbar.jsx"
import { CartContext, CartProvider } from "./context/cartContext.jsx"
import Cart from "./pages/Cart/Cart.jsx"
import Checkout from "./pages/Checkout/Checkout.jsx"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/cart" Component={Cart} />
        <Route path="/checkout" Component={Checkout} />
      </Routes>
      <Toaster />
    </CartProvider>
  )
}

export default App
