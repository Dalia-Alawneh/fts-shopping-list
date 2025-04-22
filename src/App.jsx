import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import Navbar from "./Components/shared/Navbar"
import { CartContext, CartProvider } from "./Context/CartContext.jsx"
import Cart from "./Pages/Cart"
import Checkout from "./Pages/Checkout"
import { Toaster } from "react-hot-toast"
import NotFound from "./Pages/NotFound/NotFound.jsx";
import Layout from "./Components/shared/Layout/Layout.jsx";

function App() {

  return (
    <CartProvider>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={Home} />
          <Route path="cart" Component={Cart} />
          <Route path="checkout" Component={Checkout} />
        </Route>
        <Route path="*" Component={NotFound} />
      </Routes>
      <Toaster />
    </CartProvider>
  )
}

export default App
