import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './App.css'

function App() {
  

  return (
    <div className='App'>
      <NavBar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Technologies/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
