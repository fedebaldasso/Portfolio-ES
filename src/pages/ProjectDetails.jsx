import { useParams, NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { projects } from '../data/projects';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="container mt-5 text-center">
                <h2>Proyecto no encontrado</h2>
                <NavLink to="/" className="btn btn-primary mt-3">Volver al Inicio</NavLink>
            </div>
        );
    }

    return (
        <main className="main">
            <div className="page-title" data-aos="fade">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">{project.bannerTitle || project.title}</h1>

                </div>
            </div>

            <section id="portfolio-details" className="portfolio-details section">
                <div className="container" data-aos="fade-up">
                    <div className="portfolio-details-slider">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000 }}
                            loop={true}
                        >
                            {project.sliderImages.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={img} alt="" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="row justify-content-between gy-4 mt-4">
                        <div className="col-lg-8" data-aos="fade-up">
                            <div className="portfolio-description">
                                <h2>{project.descriptionTitle || project.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: project.description }}></div>

                                {project.testimonial && (
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bi bi-quote quote-icon-left"></i>
                                            <span>{project.testimonial.quote}</span>
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>
                                        <div>
                                            {project.testimonial.img && <img src={project.testimonial.img} className="testimonial-img" alt="" />}
                                            <h3>{project.testimonial.author}</h3>
                                            <h4>{project.testimonial.role}</h4>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div className="portfolio-info">
                                <h3>Información del Proyecto</h3>
                                <ul>
                                    <li><strong>Categoría</strong> {project.category}</li>
                                    <li><strong>Cliente</strong> {project.client}</li>
                                    <li><strong>Fecha del Proyecto</strong> {project.date}</li>
                                    {project.url && project.urlType === 'button' && (
                                        <li>
                                            <a href={project.url} target="_blank" rel="noreferrer" className="btn-visit align-self-start">Visitar Website</a>
                                        </li>
                                    )}
                                    {project.url && project.urlType === 'link' && (
                                        <li>
                                            <strong>{project.urlLabel}</strong>
                                            <a href={project.url} target="_blank" rel="noreferrer">{project.linkText || 'Link'}</a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProjectDetails;
