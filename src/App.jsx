import { Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/CartContext.js";
import Cart from "./Pages/Cart"
import Checkout from "./Pages/Checkout"
import { Toaster } from "react-hot-toast"
import NotFound from "./Pages/NotFound";
import Layout from "./components/shared/Layout/Layout.jsx";
import ProductsPage from "./Pages/Products";
import Home from "./Pages/Home"

function App() {

  return (
    <CartProvider>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={Home} />
          <Route path="products" Component={ProductsPage} />
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
