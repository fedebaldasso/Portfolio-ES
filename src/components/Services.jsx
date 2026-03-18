import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();

    const servicesList = [
        {
            icon: "bi bi-braces",
            title: t('services.item1_title'),
            description: t('services.item1_desc')
        },
        {
            icon: "bi bi-diagram-3",
            title: t('services.item2_title'),
            description: t('services.item2_desc')
        },
        {
            icon: "bi bi-bar-chart",
            title: t('services.item3_title'),
            description: t('services.item3_desc')
        }
    ];

    return (
        <section id="services" className="services section">
            <div className="container section-title" data-aos="fade-up">
                <h2>{t('services.title')}</h2>
                <p>{t('services.subtitle')}</p>
            </div>

            <motion.div 
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="row gy-4">
                    {servicesList.map((service, index) => (
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100 * (index + 1)} key={index}>
                            <div className="service-item item-cyan position-relative">
                                <div className="icon">
                                    <i className={service.icon}></i>
                                </div>
                                <a href="#" className="stretched-link">
                                    <h3>{service.title}</h3>
                                </a>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Services;
