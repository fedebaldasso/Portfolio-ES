import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <section id="about" className="about section">
            <motion.div 
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="row gy-4">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src="/assets/img/profile-img.webp" className="img-fluid" id="foto" style={{ maxHeight: '350px', width: 'auto', objectFit: 'contain' }} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="about-me">
                            <h4>{t('about.title')}</h4>
                            <p>{t('about.p1')}</p>
                            <p>{t('about.p2')}</p>
                            <p>{t('about.p3')}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
