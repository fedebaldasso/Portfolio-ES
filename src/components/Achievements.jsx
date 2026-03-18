import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Achievements = () => {
  const { t } = useTranslation();

  return (
    <section id="achievements" className="achievements section">
      <motion.div
        className="container section-title"
        data-aos="fade-up"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>{t('achievements.title')}</h2>
        <p>{t('achievements.subtitle')}</p>
      </motion.div>

      <div className="container">
        <div className="row gy-4">
          {/* Div 1 */}
          <motion.div 
            className="col-lg-12 achievement-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-4" style={{ background: 'var(--alt-background-color)', borderRadius: '8px' }}>
              <h4>{t('achievements.item1_title')}</h4>
              {/* Content 1 */}
            </div>
          </motion.div>

          {/* Div 2 */}
          <motion.div 
            className="col-lg-12 achievement-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-4" style={{ background: 'var(--alt-background-color)', borderRadius: '8px' }}>
              <h4>{t('achievements.item2_title')}</h4>
              {/* Content 2 */}
            </div>
          </motion.div>

          {/* Div 3 */}
          <motion.div 
            className="col-lg-12 achievement-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="p-4" style={{ background: 'var(--alt-background-color)', borderRadius: '8px' }}>
              <h4>{t('achievements.item3_title')}</h4>
              {/* Content 3 */}
            </div>
          </motion.div>

          {/* Div 4 */}
          <motion.div 
            className="col-lg-12 achievement-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-4" style={{ background: 'var(--alt-background-color)', borderRadius: '8px' }}>
              <h4>{t('achievements.item4_title')}</h4>
              {/* Content 4 */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
