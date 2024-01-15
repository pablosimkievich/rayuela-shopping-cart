import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './components/Home/Home.jsx'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
