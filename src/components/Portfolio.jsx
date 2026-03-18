import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { projects } from '../data/projects';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
    const { t } = useTranslation();
    const [filter, setFilter] = useState('app');
    const [filteredProjects, setFilteredProjects] = useState(projects.filter(project => project.category === 'Diseño Web'));

    useEffect(() => {
        if (filter === 'app') {
            setFilteredProjects(projects.filter(project => project.category === 'Diseño Web'));
        } else if (filter === 'branding') {
            setFilteredProjects(projects.filter(project => project.category === 'Automatización de Trámite'));
        } else if (filter === 'product') {
            setFilteredProjects(projects.filter(project => project.category === 'Análisis de Datos'));
        }
    }, [filter]);

    useEffect(() => {
        // Initialize GLightbox
        const lightbox = GLightbox({
            selector: '.glightbox'
        });

        // Clean up
        return () => {
            lightbox.destroy();
        };
    }, [filteredProjects]);

    const handleFilter = (category) => {
        setFilter(category);
    };

    return (
        <section id="portfolio" className="portfolio section">
            <div className="container section-title" data-aos="fade-up">
                <h2>{t('portfolio.title')}</h2>
                <p>{t('portfolio.subtitle')}</p>
            </div>

            <motion.div 
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="isotope-layout" data-aos="fade-up" data-aos-delay="100">
                    <ul className="portfolio-filters isotope-filters">
                        <li className={filter === 'app' ? 'filter-active' : ''} onClick={() => handleFilter('app')}>{t('portfolio.filter_web')}</li>
                        <li className={filter === 'branding' ? 'filter-active' : ''} onClick={() => handleFilter('branding')}>{t('portfolio.filter_bpm')}</li>
                        <li className={filter === 'product' ? 'filter-active' : ''} onClick={() => handleFilter('product')}>{t('portfolio.filter_data')}</li>
                    </ul>

                    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${project.category}`}>
                                <img src={project.img} className="img-fluid" alt={project.title} />
                                <div className="portfolio-info">
                                    <h4>{project.title}</h4>
                                    {/* <p>{project.description}</p> */}
                                    <a href={project.zoomImg || project.img} title={project.title} data-gallery={`portfolio-gallery-${project.category}`} className="glightbox preview-link">
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    {!project.hideLink && (
                                        <NavLink to={`/project/${project.id}`} title="More Details" className="details-link">
                                            <i className="bi bi-link-45deg"></i>
                                        </NavLink>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Portfolio;
