import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Navbar from "./components/shared/Navbar/Navbar.jsx"
import { CartContext } from "./context/cartContext.jsx"
import { useReducer } from "react"
import { cartReducer, initialState } from "./reducers/cartReducer.js"

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </CartContext.Provider>
  )
}

export default App
