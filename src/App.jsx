import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './components/Home/Home.jsx'
import { ToyDetail } from './components/ToyDetail/ToyDetail.jsx'
import { NotFound } from './components/NotFound/NotFound.jsx'

function App() {

  return (
      <BrowserRouter >
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/toys/:id" element={<ToyDetail />} ></Route>
          <Route path="*" element={< NotFound />} ></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
