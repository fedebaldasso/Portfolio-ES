import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const typedEl = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        const typed = new Typed(typedEl.current, {
            strings: ["Software Developer", "BPM Developer", "Data Analyst", "Data Scientist", "Técnico Electrónico"],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="hero" className="hero section">
            <img src="/assets/img/hero-img.webp" alt="" data-aos="fade-in" />

            <div className="container d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
                <h2>{t('hero.greeting')}</h2>
                <p>
                    <span ref={typedEl}></span>
                </p>
            </div>
        </section>
    );
};

export default Hero;
