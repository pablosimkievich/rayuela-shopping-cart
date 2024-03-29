import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './components/Home/Home.jsx'
import { ToyDetail } from './components/ToyDetail/ToyDetail.jsx'
import { NotFound } from './components/NotFound/NotFound.jsx'
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart.jsx'
import { Checkout } from './components/Checkout/Checkout.jsx'

function App() {

  return (
      <BrowserRouter >
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/toys/:id" element={<ToyDetail />} ></Route>
          <Route path="/cart" element={<ShoppingCart />} ></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="*" element={< NotFound />} ></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
