import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home/Home"
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
function App() {



  return (
    <>
    <BrowserRouter>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>

    

    </>
  )
}

export default App
