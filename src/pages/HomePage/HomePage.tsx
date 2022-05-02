import React from 'react';
import howAreYouFeelingDesktop from '../../assets/pageAssets/home/howAreYouFeelingDesktop.png';
import './HomePage.css';

const HomePage: React.FC = () => {
    const {
        REACT_APP_SPOTIFY_CLIENT_ID,
        REACT_APP_SPOTIFY_AUTHORIZE_URL,
        REACT_APP_SPOTIFY_REDIRECT_URL,
        REACT_APP_SPOTIFY_SCOPES,
    }: any = process.env;

    const encodedScopes: any = encodeURIComponent(REACT_APP_SPOTIFY_SCOPES);

    const handleSpotifyLogin = () => {
        console.log(
            `${REACT_APP_SPOTIFY_AUTHORIZE_URL}?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&scope=${encodedScopes}&redirect_uri=${REACT_APP_SPOTIFY_REDIRECT_URL}&response_type=token&show_dialog=true`
        );
        window.location.href = `${REACT_APP_SPOTIFY_AUTHORIZE_URL}?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&scope=${encodedScopes}&redirect_uri=${REACT_APP_SPOTIFY_REDIRECT_URL}&response_type=token&show_dialog=true`;
    };

    const handleDemoLogin = () => {
        window.location.href = 'demo';
    };

    console.log(
        REACT_APP_SPOTIFY_CLIENT_ID,
        REACT_APP_SPOTIFY_AUTHORIZE_URL,
        REACT_APP_SPOTIFY_REDIRECT_URL,
        REACT_APP_SPOTIFY_SCOPES
    );

    return (
        <main className="page-content">
            <img
                className="home-image"
                src={howAreYouFeelingDesktop}
                alt="How are you feeling?"
            />
            <section className="home-content">
                <h1>A mood detector based on your recently played music.</h1>
                <button
                    className="spotify-login-button"
                    onClick={handleSpotifyLogin}
                >
                    Connect with Spotify
                </button>
                <h2>Don't have a Spotify account?</h2>
                <button className="demo-login-button" onClick={handleDemoLogin}>
                    View a Demo
                </button>
            </section>
        </main>
    );
};

export default HomePage;
