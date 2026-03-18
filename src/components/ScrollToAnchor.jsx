import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        if (hash === '') {
            window.scrollTo(0, 0);
        } else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    const headerOffset = 80; // Adjust according to your header height
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                    });
                }
            }, 0);
        }
    }, [pathname, hash, key]);

    return null;
};

export default ScrollToAnchor;
