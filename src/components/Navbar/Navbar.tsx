import React from 'react';
import './Navbar.css';

const handleHomeClick = () => {
    window.location.href = './';
};

const handleAboutClick = () => {
    window.location.href = './about';
};

const Navbar: React.FC = () => {
    return (
        <nav className="header">
            <h1 className="home" onClick={handleHomeClick}>
                Mood Ring
            </h1>
            <h2 className="about" onClick={handleAboutClick}>
                About Us
            </h2>
        </nav>
    );
};

export default Navbar;
