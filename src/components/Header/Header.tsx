import React from 'react';
import './Header.css';

const handleHomeClick = () => {
    window.location.href = './';
};

const handleAboutClick = () => {
    window.location.href = './about';
};

const Header: React.FC = (): JSX.Element => {
    return (
        <>
            <h1 className="home" onClick={handleHomeClick}>
                Mood Ring
            </h1>
            <h2 className="about" onClick={handleAboutClick}>
                About Us
            </h2>
        </>
    );
};

export default Header;
