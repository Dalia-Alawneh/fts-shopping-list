import { Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/CartProvider.jsx";
import Cart from "./pages/Cart/index.jsx"
import Checkout from "./pages/Checkout/index.js"
import { Toaster } from "react-hot-toast"
import NotFound from "./pages/NotFound/index.js";
import RootLayout from "./components/shared/RootLayout/RootLayout.jsx";
import ProductsPage from "./pages/Products/index.js";
import Home from "./pages/Home/index.js"

function App() {

  return (
    <CartProvider>
      <Routes>
        <Route path="/" Component={RootLayout}>
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
