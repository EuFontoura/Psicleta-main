import Header from "../../components/Container/Header"
import Navbar from "../../components/Navbar/Navbar"
import NavbarLinks from "../../components/Navbar/NavbarLinks"
import Card from "../../components/Container/Card"
import About from "../../components/Container/About"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"

function Home() {

  return (
    <div className="pt-20 md:pt-0">
      < Navbar />
      < NavbarLinks />
      < Header />
      < Card />
      < About />
      < Contact />
      < Footer />
    </div>
  )
}

export default Home
