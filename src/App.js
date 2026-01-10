import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './utilities/ThemeContext';
import { Suspense, lazy } from 'react';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-96 bg-gradient-to-b from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-950 animate-pulse" />
);

// Modern Components with code splitting
import ModernNavbar from "./components/Navbar/ModernNavbar";
import ModernHero from "./components/HeroSection/ModernHero";
const ModernAbout = lazy(() => import("./components/About/ModernAbout"));
const ModernSkills = lazy(() => import("./components/Skills/ModernSkills"));
const ModernExperience = lazy(() => import("./components/Experiences/ModernExperience"));
const ModernEducation = lazy(() => import("./components/Education/ModernEducation"));
const ModernProjects = lazy(() => import("./components/Projects/ModernProjects"));
const ModernContact = lazy(() => import("./components/Contact/ModernContact"));
const ModernFooter = lazy(() => import("./components/Footer/ModernFooter"));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-slate-900 dark:bg-slate-950 min-h-screen transition-colors duration-300">
          <ModernNavbar />
          
          <main>
            <section id="home">
              <ModernHero />
            </section>
            
            <Suspense fallback={<LoadingFallback />}>
              <ModernAbout />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <ModernSkills />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <ModernExperience />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <ModernEducation />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <ModernProjects />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <ModernContact />
            </Suspense>
          </main>
          
          <Suspense fallback={<div />}>
            <ModernFooter />
          </Suspense>
          
          <ScrollToTopButton />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;