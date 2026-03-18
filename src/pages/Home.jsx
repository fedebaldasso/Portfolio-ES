import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main id="main" style={{ overflowX: 'hidden', width: '100%' }}>
            <Hero />
            <About />
            <Skills />
            <Resume />
            <Portfolio />
            <Achievements />
            <Testimonials />
            <Contact />
        </main>
    );
};

export default Home;
