import { Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"

function App() {

  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </>
  )
}

export default App
