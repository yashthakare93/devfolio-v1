import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your components
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

// This new component will render all the sections for your homepage
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <BlogList /> {/* You can keep the blog list preview on the homepage */}
    <Contact />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="bg-navy text-lightest-slate min-h-screen overflow-x-hidden relative">
        {/* These components will appear on every page */}
        <Navigation />
        <SocialLinks />
        <ContactEmail />

        <main>
          <Routes>
            {/* Route for the homepage */}
            <Route path="/" element={<HomePage />} />
            
            {/* Route specifically for the blog list page */}
            <Route path="/blog" element={<BlogList />} />
            
            {/* Route for displaying a single, detailed blog post */}
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
        </main>

        {/* Footer will appear on every page */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
