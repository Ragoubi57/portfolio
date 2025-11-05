import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Achievements } from './components/Achievements/Achievements';
import { Contact } from './components/Contact/Contact';
import { ScrollAnimator } from './components/ScrollAnimator/ScrollAnimator';

function App() {
  return (
    <>
      <Navbar />
      <main className="page-wrapper">
        <div id="hero">
          {/* We don't animate the Hero section, it's visible on load */}
          <Hero />
        </div>

        <div id="about">
          <ScrollAnimator>
            <About />
          </ScrollAnimator>
        </div>

        <div id="experience">
          <ScrollAnimator>
            <Experience />
          </ScrollAnimator>
        </div>
        
        {/* Wrap each subsequent section with the animator */}
        <div id="skills">
          <ScrollAnimator>
            <Skills />
          </ScrollAnimator>
        </div>

        <div id="projects">
          <ScrollAnimator>
            <Projects />
          </ScrollAnimator>
        </div>

        <div id="achievements">
          <ScrollAnimator>
            <Achievements />
          </ScrollAnimator>
        </div>
        
        <div id="contact">
          <ScrollAnimator>
            <Contact />
          </ScrollAnimator>
        </div>
      </main>
    </>
  );
}

export default App;