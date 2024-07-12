import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Experience from "./Components/Experience.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function App() {
 useEffect(()=>{
  Aos.init();
 },
 [] 
)

  return (
    <>
    <Navbar/>
    <div className="container">
    <Home/>
    <Experience/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
    </>
  )
}

export default App
