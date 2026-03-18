import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // On component mount, check local storage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.add('light-mode');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle"
      style={{
        background: 'transparent',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        padding: '0 15px'
      }}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <i className={isDarkMode ? "bi bi-brightness-high" : "bi bi-moon-stars"}></i>
    </button>
  );
};

export default ThemeToggle;
