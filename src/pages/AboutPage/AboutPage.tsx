import React from 'react';
import './AboutPage.css';

const { REACT_APP_TEST } = process.env;
console.log(REACT_APP_TEST);

const AboutPage: React.FC = (): JSX.Element => {
    return (
        <main className="page-content">
            <h1>this is the about page helloooooo</h1>
        </main>
    );
};

export default AboutPage;
