import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link, animateScroll as scroll } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { t } = useTranslation();

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
    document.body.classList.toggle('mobile-nav-active');
  };

  // Close mobile nav when link is clicked
  const closeMobileNav = () => {
    setIsMobileNavActive(false);
    document.body.classList.remove('mobile-nav-active');
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    closeMobileNav();
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <NavLink to="/" className="logo d-flex align-items-center" onClick={(e) => { if (isHome) { e.preventDefault(); scrollToTop(); } else { closeMobileNav(); } }}>
          <img src="/assets/img/new_logo.webp" alt="" />
          <h1 className="sitename">FB</h1>
        </NavLink>

        <nav id="navmenu" className={`navmenu ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li>
              {isHome ? (
                <Link to="hero" spy={true} hashSpy={false} smooth={true} duration={500} offset={-100} activeClass="active" onClick={closeMobileNav}>{t('header.home')} </Link>
              ) : (
                <NavLink to="/" onClick={closeMobileNav}>{t('header.home')}</NavLink>
              )}
            </li>
            <li>
              {isHome ? (
                <Link to="about" spy={true} hashSpy={true} smooth={true} duration={500} offset={-80} activeClass="active" onClick={closeMobileNav}>{t('header.about')}</Link>
              ) : (
                <NavLink to="/#about" onClick={closeMobileNav}>{t('header.about')}</NavLink>
              )}
            </li>
            <li>
              {isHome ? (
                <Link to="portfolio" spy={true} hashSpy={true} smooth={true} duration={500} offset={-80} activeClass="active" onClick={closeMobileNav}>{t('header.portfolio')}</Link>
              ) : (
                <NavLink to="/#portfolio" onClick={closeMobileNav}>{t('header.portfolio')}</NavLink>
              )}
            </li>

            <li>
              {isHome ? (
                <Link to="contact" spy={true} hashSpy={true} smooth={true} duration={500} offset={-80} activeClass="active" onClick={closeMobileNav}>{t('header.contact')}</Link>
              ) : (
                <NavLink to="/#contact" onClick={closeMobileNav}>{t('header.contact')}</NavLink>
              )}
            </li>
            <li className="d-flex align-items-center">
              <LanguageSelector />
              <ThemeToggle />
            </li>
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileNav}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
