import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="dropdown language-selector" style={{ margin: '0 15px' }}>
      <button 
        className="btn dropdown-toggle" 
        type="button" 
        id="dropdownMenuButton" 
        data-bs-toggle="dropdown" 
        aria-expanded="false"
        style={{ color: 'var(--nav-color)', background: 'transparent', border: 'none', padding: 0 }}
      >
        {i18n.language.toUpperCase()}
      </button>
      <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
        <li><button className="dropdown-item" onClick={() => changeLanguage('es')}>ES - Español</button></li>
        <li><button className="dropdown-item" onClick={() => changeLanguage('en')}>EN - English</button></li>
        <li><button className="dropdown-item" onClick={() => changeLanguage('it')}>IT - Italiano</button></li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
