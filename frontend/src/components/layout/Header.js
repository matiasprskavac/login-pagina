import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/style.css'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="img/Logo.jpg" alt="Matias' Restaurant Logo" />
            </div>
            <nav className="sidebar">
                <ul className="nav-links">
                    <li><NavLink to="/">Home</NavLink ></li>
                    <li><NavLink to="/menu">Menu</NavLink ></li>
                    <li><NavLink to="/local">Locals</NavLink ></li>
                    <li><NavLink to="/contact">Contact</NavLink ></li>
                </ul>
            </nav>
            <div className="media">
                <hr />
                <ul className="media-links">
                    <li><a href="https://www.instagram.com" target='blank_'><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com" target='blank_'><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="https://x.com/home" target='blank_'><i className="fa-brands fa-twitter"></i></a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;