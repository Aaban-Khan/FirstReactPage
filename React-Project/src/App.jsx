import Navbar from "./components/Navbar"
import About from "./components/About"
import Crousel from "./components/Crousel"
import Footer from "./components/Footer"
import Newsletter from "./components/Newsletter"
import "./App.css"
import Parallax from "./components/Parallax"
function App() {

  return (
    <>
      <Navbar></Navbar>
      <About></About>
      <Parallax></Parallax>
      <Crousel></Crousel>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  )
}

export default App
