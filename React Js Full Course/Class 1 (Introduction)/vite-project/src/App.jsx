
import Navbar from './Components/Navbar'
import Menus from './Components/Menus'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import './App.css'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar title='<\> Code With HM' Homes='Home' />
      <Menus />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
