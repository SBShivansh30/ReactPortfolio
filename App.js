import React from 'react';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ExtraCurriculars from './components/ExtraCurriculars';
import Footer from './components/Footer';
import './App.css'; // Import the App.css file

function App() {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center">
        <h1>Shivansh Bansal</h1>
        <p>Trading Analyst - Barclays | IIT Bombay</p>
        <p>AIR - 462: JEE Mains | AIR - 492: JEE Advanced | KVPY | NSEP Top-1</p>
      </header>

      <Education />
      <Experiences />
      <Skills />
      <Leadership />
      <Projects />
      <Certifications />
      <ExtraCurriculars />
      
      <Footer />
    </div>
  );
}

export default App;
