import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeContent from './components/HomeContent';
import DomainofInterest from './components/TechStack';
import AboutMe from './components/AboutMe';
import Academics from './components/Academics';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectCard'; // project page
import Internships from './components/InternCard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page route */}
        <Route
          path="/"
          element={
            <>
              <HomeContent />
              <DomainofInterest />
              <AboutMe />
              <Academics />
              <Internships />
              <Skills />
              <Projects />
              <Footer />
            </>
          }
        />
        
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
