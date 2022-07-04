import React from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

interface Props {
    isFullscreen?: boolean;
}

const handleHomeClick = () => {
    window.location.href = './';
};

const handleAboutClick = () => {
    window.location.href = './about';
};

const Navbar: React.FC<Props> = ({ isFullscreen = false }) => {
    const { pathname } = useLocation();
    const isMoodPage = pathname === '/mood';

    if (isMoodPage && !isFullscreen) {
        return <></>;
    }

    return (
        <nav className={isMoodPage ? 'fullscreen-header' : 'header'}>
            <h1 className={'home'} onClick={handleHomeClick}>
                Mood Ring
            </h1>
            <h2 className={'about'} onClick={handleAboutClick}>
                About
            </h2>
        </nav>
    );
};

export default Navbar;
