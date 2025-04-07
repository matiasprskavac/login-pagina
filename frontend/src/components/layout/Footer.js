import React from 'react';
import '../../styles/style.css'

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2025 Matias' Restaurant. All rights reserved.</p>
            <ul className="footer-links">
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms of Service</a></li>
            </ul>
        </footer>
    );
};

export default Footer;