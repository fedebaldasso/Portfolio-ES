const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="copyright text-center">
                    <p>
                        <span>©</span> <span>Copyright</span>{' '}
                        <strong className="px-1 sitename">Moonlit Solutions</strong>{' '}
                        <span>All Rights Reserved</span>
                    </p>
                </div>
                <div className="social-links d-flex justify-content-center">
                    <a href="https://github.com/fedebaldasso" target="_blank" rel="noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/federico-baldasso/" target="_blank" rel="noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
                <div className="credits">
                    Designed by <span>Federico Baldasso</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
