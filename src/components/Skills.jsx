import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();
    return (
        <section id="skills" className="resume section">
            <div className="container section-title" data-aos="fade-up">
                <h2>{t('skills.title')}</h2>
                <p>{t('skills.subtitle')}</p>
            </div>

            <motion.div 
                className="contenedor"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
            >
                <div className="box1">
                    <ul>
                        <li><img className="iconos-skills" src="/assets/img/html.webp" alt="" /> HTML</li>
                        <br />
                        <li><img className="iconos-skills" src="/assets/img/react.webp" alt="" /> React JS</li>
                        <br />
                        <li><img className="iconos-skills" src="/assets/img/sql.webp" alt="" /> SQL</li>
                        <br />
                        <li><img className="iconos-skills" src="/assets/img/program.webp" alt="" /> C / C++</li>
                    </ul>
                </div>
                <div className="box2">
                    <ul>
                        <li><img className="iconos-skills" src="/assets/img/css-3.webp" alt="" /> CSS</li>
                        <br />
                        <li><img className="iconos-skills" src="/assets/img/node.webp" alt="" /> Node JS</li>
                        <br />
                        <li><img className="iconos-skills" src="/assets/img/bar-chart.webp" alt="" /> Power Bi</li>
                        <br />
                        <li><img className="iconos-skills" src="/assets/img/postman.1fba0f04.svg" alt="" /> Postman</li>
                    </ul>
                </div>
                <div className="box3">
                    <ul>
                        <li><img className="iconos-skills" src="/assets/img/js.webp" alt="" /> JavaScript</li>
                        <br />
                        <li><img className="iconos-skills" src="/assets/img/angular.webp" alt="" /> Angular JS</li>
                        <br />
                        <li><img className="iconos-skills" id="change-icon" src="/assets/img/git.webp" alt="" /> Git</li>
                        <br />
                        <li><img className="iconos-skills" src="/assets/img/azure.webp" alt="" /> Azure</li>
                    </ul>
                </div>
                <div className="box4">
                    <ul>
                        <li><img className="iconos-skills" src="/assets/img/python.webp" alt="" /> Python</li>
                        <br />
                        <li><img className="iconos-skills" src="/assets/img/django.webp" alt="" /> Django</li>
                        <br />
                        <li><img className="iconos-skills" id="change-icon" src="/assets/img/github.webp" alt="" /> GitHub</li>
                        <br />
                        <li><img className="iconos-skills" id="change-icon" src="/assets/img/arduino.webp" alt="" /> Arduino</li>
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
