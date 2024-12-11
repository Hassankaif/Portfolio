import './App.css'
import Navbar from "./components/Navbar"
import HomeContent from './components/HomeContent'
import DomainofInterest from './components/TechStack'
import AboutMe from './components/AboutMe'
import Academics from './components/Academics'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {

  return (
    <>
        <Navbar/>
        <HomeContent/>
        <DomainofInterest/>
        <AboutMe/>
        <Academics/>
        <Skills/>
        <Projects/>
        <Footer/>
    </>
  )
}

export default App
