import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ProjectsSlider from "./components/ProjectsSlider";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { loadTransitions } from "./utils/scrollReveal";
import "./App.css";

function App() {
  useEffect(() => {
    loadTransitions();
  }, [])
  
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Hero />
      <AboutMe />
      <ProjectsSlider />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
