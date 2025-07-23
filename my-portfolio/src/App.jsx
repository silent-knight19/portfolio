import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./landingPage/Navbar";
import Hero1 from "./landingPage/Hero1";
import AboutPage from "./About/AboutPage";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Skills from "./skills/skills";
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero1 />
                  
                </>
              }
            />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
