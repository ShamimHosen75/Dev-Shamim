import { BrowserRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import './App.css';
import Contact from './components/Contact/Contact';
import Education from "./components/Education/Education";
import Experience from './components/Experiences/Experience';
import Hero from './components/HeroSection/Hero';
import Navbar from './components/Navbar/Navbar';
import Portfolio from "./components/Portfolios/Portfolio";
import Skills from './components/Skills/Skills';
import { darkTheme } from "./utilities/Themes";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
       <Navbar>
       </Navbar>
       <Body>
          <Hero></Hero>
            <Wrapper>
             <Skills></Skills>
             <Experience></Experience>
             <Portfolio></Portfolio>
             <Education></Education>
             <Contact></Contact>
            </Wrapper>
        </Body>
      </Router>   
    </ThemeProvider>
  );
}

export default App;
