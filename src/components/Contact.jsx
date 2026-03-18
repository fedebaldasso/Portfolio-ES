import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        Nombre: '',
        Apellido: '',
        Email: '',
        Mensaje: ''
    });

    const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formspree.io/f/xvgponkv", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    Nombre: '',
                    Apellido: '',
                    Email: '',
                    Mensaje: ''
                });

                // Redirect/Reset after 5 seconds
                setTimeout(() => {
                    setStatus('');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 5000);

            } else {
                console.error("Form error", response);
                setStatus('error');
            }
        } catch (error) {
            console.error("Network error", error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="contact section">
            <div className="container section-title" data-aos="fade-up">
                <h2>{t('contact.title')}</h2>
                <p>
                    {t('contact.subtitle')}
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-5">
                        <div className="col-lg-4">
                            <div className="info-item d-flex align-items-center">
                                <i className="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <h3>{t('contact.address_label')}</h3>
                                    <p>{t('contact.address')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <a className="" href="https://api.whatsapp.com/send?phone=5492646274853&text=Hola%20Fede!%20Cómo%20estás?%20Quiero%20consultar%20por%20tus%20servicios." target="_blank" rel="noreferrer">
                                <div className="info-item d-flex align-items-center">
                                    <i className="bi bi-telephone flex-shrink-0"></i>
                                    <div>
                                        <h3>{t('contact.phone_label')}</h3>
                                        <p className="wp">(+54) 264 6 27-4853</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-4">
                            <div className="info-item d-flex align-items-center">
                                <i className="bi bi-envelope flex-shrink-0"></i>
                                <div>
                                    <h3>{t('contact.email_label')}</h3>
                                    <p>fedebaldasso@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <form
                        id="contact-form"
                        onSubmit={handleSubmit}
                        className="php-email-form"
                    >
                        <div className="row gy-4">
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="Nombre"
                                    className="form-control"
                                    placeholder={t('contact.form_name')}
                                    value={formData.Nombre}
                                    required
                                    onChange={handleChange}
                                    disabled={status === 'submitting'}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="Apellido"
                                    className="form-control"
                                    placeholder={t('contact.form_surname')}
                                    value={formData.Apellido}
                                    required
                                    onChange={handleChange}
                                    disabled={status === 'submitting'}
                                />
                            </div>
                            <div className="col-md-12">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="Email"
                                    placeholder={t('contact.form_email')}
                                    value={formData.Email}
                                    required
                                    onChange={handleChange}
                                    disabled={status === 'submitting'}
                                />
                            </div>
                            <div className="col-md-12">
                                <textarea
                                    className="form-control"
                                    name="Mensaje"
                                    rows="6"
                                    placeholder={t('contact.form_message')}
                                    value={formData.Mensaje}
                                    required
                                    onChange={handleChange}
                                    disabled={status === 'submitting'}
                                ></textarea>
                            </div>

                            <div className="col-md-12 text-center">
                                {status === 'loading' && <div className="loading">Loading</div>}
                                {status === 'error' && <div className="error-message d-block">Hubo un error al enviar el mensaje. Intente nuevamente.</div>}
                                {status === 'success' && <div className="sent-message d-block">{t('contact.form_success')}</div>}
                                <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? t('contact.form_sending') : t('contact.form_submit')}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
