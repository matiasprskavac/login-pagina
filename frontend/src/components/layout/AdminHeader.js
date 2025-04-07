import React from 'react';
import { useAuth } from '../../auth/AuthProvider';
import { NavLink } from 'react-router-dom';
import '../../styles/style.css'

const AdminHeader = () => {
    const { logout } = useAuth();


    const handleLogout = () => {
        logout();
    };

    return (
        <header className="header">
            <div className="logo">
                <img src="img/Logo.jpg" alt="Matias' Restaurant Logo" />
            </div>
            <nav className="sidebar">
                <ul className="nav-links">
                    <li><NavLink to="/admin">Edit</NavLink ></li>
                    <li><button onClick={handleLogout} className='btn-admin'>Logout</button></li>
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

export default AdminHeader;