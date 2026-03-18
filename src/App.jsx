import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import ScrollToTopButton from './components/ScrollToTopButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './custom.css';

import ScrollToAnchor from './components/ScrollToAnchor';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Remove preloader
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      preloader.remove();
    }
  }, []);

  return (
    <Router>
      <ScrollToAnchor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
