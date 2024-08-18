import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home/Home"
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import SignUp from './Components/SignUp/SignUp'
import About from './Components/About/About'

function App() {



  return (
    <>
    <BrowserRouter>
    <div className="app">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element ={<SignUp />} />
        <Route path="/about" element ={<About />}/>
      </Routes>
      {/* <Footer /> */}
    </div>
    </BrowserRouter>

    

    </>
  )
}

export default App
