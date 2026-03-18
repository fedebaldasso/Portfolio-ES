import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
    const { t } = useTranslation();
    return (
        <section id="testimonials" className="testimonials section">
            <img
                src="/assets/img/testimonials-bg.webp"
                className="testimonials-bg"
                alt=""
            />

            <motion.div 
                className="container"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                <Swiper
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    slidesPerView="auto"
                    pagination={{
                        clickable: true,
                        type: 'bullets',
                    }}
                    className="init-swiper"
                >
                    <SwiperSlide>
                        <div className="testimonial-item">
                            <img
                                src="/assets/img/testimonials/fergimenez.webp"
                                className="testimonial-img"
                                alt="Fernando Gimenez"
                            />
                            <h3>Fernando Gimenez</h3>
                            <h4>CEO &amp; Founder de Tacú Sistemas</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                <span>
                                    {t('testimonials.fergimenez')}
                                </span>
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                    </SwiperSlide>

                    {/* Add more SwiperSlide components here for additional testimonials */}

                </Swiper>
                <div className="swiper-pagination"></div>
            </motion.div>
        </section>
    );
};

export default Testimonials;
