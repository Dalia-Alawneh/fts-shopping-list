import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import Navbar from "./Components/shared/Navbar"
import { CartContext, CartProvider } from "./Context/CartContext.jsx"
import Cart from "./Pages/Cart"
import Checkout from "./Pages/Checkout"
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
