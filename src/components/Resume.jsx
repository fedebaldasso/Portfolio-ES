import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Resume = () => {
    const { t } = useTranslation();
    return (
        <section id="resume" className="resume section">
            <div className="container section-title" data-aos="fade-up">
                <h2>{t('resume.title')}</h2>
            </div>

            <div className="contenedorr" id="cv">
                <a
                    href="https://drive.google.com/file/d/1fbbtT0cRBwHWI7SW9kOHR84rguY1onVA/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button type="button">Currículum Vitae</button>
                </a>
            </div>

            <motion.div 
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">{t('resume.academic')}</h3>
                        <div className="resume-item">
                            <h4>Ingeniería Electrónica</h4>
                            <h5>2005 - 2018</h5>
                            <p>
                                <em>Universidad Tecnológica Nacional (U.T.N.) <br />
                                    Facultad Regional Mendoza (F.R.M.) <br />
                                    Mendoza, Argentina</em>
                            </p>
                        </div>

                        <div className="resume-item">
                            <h4>Producción de Bienes y Servicios</h4>
                            <h5>2002 - 2004</h5>
                            <p>
                                <em>Escuela de Comercio Martín Zapata<br />
                                    Universidad Nacional de Cuyo (U.N.C.)<br />
                                    Mendoza, Argentina</em>
                            </p>
                        </div>

                        <h3 className="resume-title">{t('resume.complementary')}</h3>
                        <div className="resume-item">
                            <h4>
                                Azure Fundamentals<span> - </span>
                                <a href="https://drive.google.com/file/d/1ITSvLnPV6B2MRNnLagTPU4NiYyM0dCxY/view?usp=sharing" target="_blank" rel="noreferrer">
                                    <span>{t('resume.certificate')}</span>
                                </a>
                            </h4>
                            <h5>03/2023 - 06/2023</h5>
                            <p><em>Microsoft</em></p>
                            <p>Certificación AZ-900</p>
                        </div>

                        <div className="resume-item">
                            <h4>
                                Python<span> - </span>
                                <a href="https://drive.google.com/file/d/1bjwLUqE7c-VEq8kCT9oGi-iNK39LIV15/view?usp=sharing" target="_blank" rel="noreferrer">
                                    <span>{t('resume.certificate')}</span>
                                </a>
                            </h4>
                            <h5>10/2022 - 01/2023</h5>
                            <p><em>Coderhouse</em></p>
                            <p>Orientado a Desarrollo Backend.</p>
                        </div>

                        <div className="resume-item">
                            <h4>
                                Data Science<span> - </span>
                                <a href="https://drive.google.com/file/d/1uU3pPVmNxmKSxOQ2-xrnSqhErlsCi9UB/view?usp=sharing" target="_blank" rel="noreferrer">
                                    <span>{t('resume.certificate')}</span>
                                </a>
                            </h4>
                            <h5>03/2022 - 10/2022</h5>
                            <p><em>Coderhouse</em></p>
                            <p>Python y librerías, Regresión, Clasificación, etc.</p>
                        </div>

                        <div className="resume-item">
                            <h4>Full Stack Developer</h4>
                            <h5>01/2022 - 12/2022</h5>
                            <p><em>NUCBA</em></p>
                            <p>JavaScript, React.Js, Next.Js, Node.Js</p>
                        </div>

                        <div className="resume-item">
                            <h4>
                                Full Stack Developer<span> - </span>
                                <a href="https://drive.google.com/file/d/1ysqzb8eeTcf0u8qb2evjHMVmgko2SnHO/view?usp=sharing" target="_blank" rel="noreferrer">
                                    <span>{t('resume.certificate')}</span>
                                </a>
                            </h4>
                            <h5>11/2021 - 07/2022</h5>
                            <p>
                                <em>Argentina Programa - Ministerio de Desarrollo Productivo</em>
                            </p>
                            <p>Typescript, Angular, Bootstrap, Java, etc.</p>
                        </div>

                        <div className="resume-item">
                            <h4>
                                Data Analytics<span> - </span>
                                <a href="https://drive.google.com/file/d/1LeH8RzZlYqg4CJ3_l1iX7VtG8dFsaX1r/view?usp=sharing" target="_blank" rel="noreferrer">
                                    <span>{t('resume.certificate')}</span>
                                </a>
                            </h4>
                            <h5>10/2021 - 12/2021</h5>
                            <p><em>Coderhouse</em></p>
                            <p>SQL, Power BI.</p>
                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="resume-title">{t('resume.experience')}</h3>
                        <div className="resume-item">
                            <h4>{t('resume.exp1_title')}</h4>
                            <h5>05/2023 - {t('resume.current')}</h5>
                            <p><em>Gobierno de San Juan </em></p>
                            <ul>
                                <li>{t('resume.exp1_desc')}</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h4>{t('resume.exp2_title')}</h4>
                            <h5>04/2021 - 04/2023</h5>
                            <p><em>Moonlit Solutions ({t('resume.freelance', { defaultValue: 'Autónomo' })})</em></p>
                            <ul>
                                <li>{t('resume.exp2_desc1')}</li>
                                <li>{t('resume.exp2_desc2')}</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h4>{t('resume.exp3_title')}</h4>
                            <h5>03/2019 - 03/2021</h5>
                            <p><em>Hospital L.C. Lagomaggiore - Progeser S.R.L.</em></p>
                            <ul>
                                <li>{t('resume.exp3_desc')}</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h4>{t('resume.exp4_title')}</h4>
                            <h5>07/2017 - 02/2019</h5>
                            <p><em>S.M.A. (Sistemas Médicos Avanzados)</em></p>
                            <ul>
                                <li>{t('resume.exp4_desc')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Resume;
