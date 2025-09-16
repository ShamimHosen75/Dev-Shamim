import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// Modern Components
import ModernAbout from "./components/About/ModernAbout";
import ModernContact from "./components/Contact/ModernContact";
import ModernEducation from "./components/Education/ModernEducation";
import ModernExperience from "./components/Experiences/ModernExperience";
import ModernFooter from "./components/Footer/ModernFooter";
import ModernHero from "./components/HeroSection/ModernHero";
import ModernNavbar from "./components/Navbar/ModernNavbar";
import ModernProjects from "./components/Projects/ModernProjects";
import ModernSkills from "./components/Skills/ModernSkills";

function App() {
  return (
    <Router>
      <div className="bg-slate-900 min-h-screen">
        <ModernNavbar />
        
        <main>
          <section id="home">
            <ModernHero />
          </section>
          
          <ModernAbout />
          <ModernSkills />
          <ModernExperience />
          <ModernEducation />
          <ModernProjects />
          <ModernContact />
        </main>
        
        <ModernFooter />
      </div>
    </Router>
  );
}

export default App;