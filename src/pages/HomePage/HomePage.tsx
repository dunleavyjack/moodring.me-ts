import React from 'react';
import { useDispatch } from 'react-redux';
import { setDemoStatus } from '../../actions';
import { useNavigate } from 'react-router-dom';
import howAreYouFeelingDesktop from '../../assets/pageAssets/home/howAreYouFeelingDesktop.png';
import './HomePage.css';

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        REACT_APP_SPOTIFY_CLIENT_ID,
        REACT_APP_SPOTIFY_AUTHORIZE_URL,
        REACT_APP_SPOTIFY_REDIRECT_URL,
        REACT_APP_SPOTIFY_SCOPES,
    }: any = process.env;

    const encodedScopes: any = encodeURIComponent(REACT_APP_SPOTIFY_SCOPES);

    const handleSpotifyLogin = (): void => {
        window.location.href = `${REACT_APP_SPOTIFY_AUTHORIZE_URL}?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&scope=${encodedScopes}&redirect_uri=${REACT_APP_SPOTIFY_REDIRECT_URL}&response_type=token&show_dialog=true`;
    };

    const handleDemoLogin = (): void => {
        dispatch(setDemoStatus(true));
        navigate('/mood');
    };

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
