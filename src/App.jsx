import Home from "./components/Home"
import Navbar from "./components/Navbar"
import NavbarLinks from "./components/NavbarLinks"
import Card from "./components/Card"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="pt-20 md:pt-0">
      < Navbar />
      < NavbarLinks />
      < Home />
      < Card />
      < About />
      < Contact />
      < Footer />
    </div>
  )
}

export default App
