import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import howMoodringWasBuilt from '../../assets/pageAssets/how-built.svg';
import privacyHeader from '../../assets/pageAssets/privacy-header.svg';
import privacyFooter from '../../assets/pageAssets/privacy-bottom.svg';
// import jack from '../../assets/pageAssets/jack-name.svg';
// import jeonghye from '../../assets/pageAssets/jeonghye-name.svg';
// import aboutUs from '../../assets/pageAssets/about-us.svg';
import aboutMoodRing from '../../assets/pageAssets/about-moodring.svg';
import './AboutPage.css';

const AboutPage: React.FC = () => {
    return (
        <main className="page-content scrollable about-nav">
            <Navbar isFullscreen={true} />

            {/* About Moodring */}
            <section className="about-section">
                <img
                    alt="About Moodring"
                    src={aboutMoodRing}
                    className="svg-header top"
                />
                <h2 className="about-text">
                    Your mood is determined based on different analytics (tempo,
                    energy, acousticness, etc.) found in each song. That data is
                    compared and matched with one of over thirty moods to
                    display.
                    <br />
                    <br />
                    Moods are strange and ineffable. But hopefully it connected
                    with you :)
                </h2>
            </section>

            {/* About us */}
            {/* <section className="about-section">
                <img alt="About Us" src={aboutUs} className="svg-header top" />
            </section> */}

            {/* How Moodring Was Built */}
            <section className="about-section">
                <img
                    alt="How Moodring was built"
                    src={howMoodringWasBuilt}
                    className="svg-header top"
                />
                <h2 className="about-text">
                    This project was designed with Figma and written in
                    TypeScript using React, Redux, NestJS (as a backend server),
                    along with the Spotify Web API. Both the UI and backend are
                    hosted with Vercel and the full code is available to view{' '}
                    <a
                        className="custom-link"
                        href="https://github.com/dunleavyjack/moodring.me"
                    >
                        here (UI)
                    </a>{' '}
                    and{' '}
                    <a
                        className="custom-link"
                        href="https://github.com/dunleavyjack/moodring.me-backend"
                    >
                        here (backend)
                    </a>
                    .
                    <br />
                    You can also see an earlier beta version (written in
                    JavaScript){' '}
                    <a
                        className="custom-link"
                        href="https://moodring.vercel.app/"
                    >
                        here
                    </a>
                    .
                </h2>
            </section>

            {/* Privacy */}
            <section className="about-section">
                <img
                    alt="Privacy header"
                    src={privacyHeader}
                    className="svg-header top"
                />
                <h2 className="about-text">
                    The complete Spotify privacy policy can be viewed here,
                    which includes approved third-party projects like this one.
                </h2>
                <img
                    alt="Privacy footer"
                    src={privacyFooter}
                    className="svg-header bottom"
                />
            </section>

            <section className="about-section">
                <h2 className="about-text">MoodRing</h2>
                <h2 className="about-text">Atlanta 2022 :)</h2>
            </section>
        </main>
    );
};

export default AboutPage;
