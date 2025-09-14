// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import SocialLinks from './components/SocialLinks';
import ContactEmail from './components/ContactEmail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogList from './components/Blog'; 
import BlogDetail from './components/BlogDetail';
import ProjectDetail from './components/ProjectDetail';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <BlogList />
    <Contact />
  </>
);

function App() {
  return (
    <BrowserRouter basename="/devfolio-v1">
      <div className="bg-navy text-lightest-slate min-h-screen overflow-x-hidden relative">
        <Navigation />
        <SocialLinks />
        <ContactEmail />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;