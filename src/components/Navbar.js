import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="site-header sticky-top py-3">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
            <a href="/#" onclick="return redirectMe(this);">
                <img 
                    className="navbar-logo d-block mx-auto"
                    role="img"
                    viewBox="0 0 24 24"
                    focusable="false" 
                    src="https://res.cloudinary.com/dbev4mnac/image/upload/v1660308941/logo_idbpew.png"
                    height="40" 
                    alt="" 
                    loading="lazy"
                />
            </a>
            <a className="py-2 d-none d-md-inline-block" href="/#" onclick="return redirectMe(this);">Home</a>
            <Link to="/about" className="py-2 d-none d-md-inline-block">About Us</Link>
            <Link to="/news" className="py-2 d-none d-md-inline-block">News</Link>
            <a className="py-2 d-none d-md-inline-block" href="/#" onclick="return redirectMe(this);">Meet The Team</a>
            <a className="py-2 d-none d-md-inline-block" href="/#socials" onclick="return redirectMe(this);">Social Media</a>
        </div>
    </nav>
);

export default Navbar;