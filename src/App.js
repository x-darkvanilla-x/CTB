import React, { useEffect } from "react";
// import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Common/Navbar";
import { Footer } from "./components/Common/Footer";
import { Header } from "./components/Common/Header";

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Home } from "./pages/Home";

const About = () => (
  <div>
    <Header
      image="https://media-public.canva.com/MADQ5pyWLTY/1/screen_2x.jpg"
      title="About CTB"
    />
  </div>
);

const Services = () => (
  <div>
    <Header
      image="https://media-public.canva.com/eYsIA/MAEV6KeYsIA/1/s2.jpg"
      title="Our Services"
    />
  </div>
);

const Workshops = () => (
  <div>
    <Header
      image="https://media-public.canva.com/MADQ5A2QqqU/1/screen_2x.jpg"
      title="Workshops"
    />
  </div>
);

const Pathway = () => (
  <div>
    <Header
      image="https://media-public.canva.com/rnTlA/MAEV50rnTlA/1/s2.jpg"
      title="ICF Certification Program"
    />
  </div>
);

const Blogs = () => (
  <div>
    <Header
      image="https://media-public.canva.com/HpLL8/MAEFIYHpLL8/1/s2.jpg"
      title="Blog Posts"
    />
  </div>
);

const Policy = () => (
  <div>
    <Header
      image="https://media-public.canva.com/2FTKk/MAEayQ2FTKk/1/s2.jpg"
      title="Policies"
    />
  </div>
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      easing: 'ease',  
      once: true,      
    });
  }, []); 

  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/pathway" element={<Pathway />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/policy" element={<Policy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;