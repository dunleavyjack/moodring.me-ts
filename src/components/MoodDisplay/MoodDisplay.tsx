import React, { useEffect, useState } from 'react';
import CircularProfilePic from '../CircularProfilePic/CircularProfilePic';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import MoodElement from '../MoodElement/MoodElement';
import Synth from '../Synth/Synth';
import './MoodDisplay.css';
import { calculateMood } from '../../utils/moodUtil';
import profileImageLine from '../../assets/pageAssets/profileImageLine.png';
import expressive from '../../assets/moods/expressive.png';
import fullBreakdown from '../../assets/pageAssets/fullBreakdown.png';
import { store } from '../../store';
import { AudioFeatures, User, Songs } from '../../types';

interface ReduxState {
    user: User;
    recentSongs: Songs;
    audioFeatures: AudioFeatures;
}

const MoodDisplay: React.FC = () => {
    const { user, recentSongs, audioFeatures }: ReduxState = store.getState();
    const [finishedColorShiftAnimation, setFinishedColorShiftAnimation] =
        useState<boolean>(false);
    const [mood, setMood] = useState<any>('');

    console.log(mood);
    console.log(audioFeatures);

    useEffect(() => {
        setMood(calculateMood(audioFeatures));
        setTimeout(() => {
            setFinishedColorShiftAnimation(true);
        }, 3000);
    }, [audioFeatures]);

    if (!finishedColorShiftAnimation) {
        return <LoadingAnimation />;
    }

    return (
        <>
            <main className="page-content scrollable">
                <section className="profile-display-container">
                    <CircularProfilePic imageURL={user.imageURL[0]} />
                    <img
                        alt="Profile Decoration"
                        src={profileImageLine}
                        className="profile-decoration"
                    />
                </section>
                <section className="mood-display-container">
                    <img
                        alt="Your Mood"
                        src={expressive}
                        className="your-mood"
                    />
                </section>
                <section>
                    <h2 className="mood-description">
                        Your recent songs have{' '}
                        {mood.firstMood.difference.toFixed(2)}%{' '}
                        {mood.firstMood.mood.replace('-', ' ')}{' '}
                        {mood.conjuction}{' '}
                        {mood.secondMood.difference.toFixed(2)}%{' '}
                        {mood.secondMood.mood.replace('-', ' ')} than average.
                    </h2>
                </section>
                <section className="breakdown-container">
                    <img
                        alt="Full Breakdown"
                        src={fullBreakdown}
                        className="full-breakdown"
                    />
                    <div className="mood-display-grid">
                        <div className="left">
                            <MoodElement
                                element={'More Happiness'}
                                percent={'50.2'}
                            />
                            <MoodElement
                                element={'More Danceability'}
                                percent={'12.8'}
                            />
                            <MoodElement
                                element={'More Energy'}
                                percent={'34.7'}
                            />
                            <MoodElement
                                element={'More Acousticness'}
                                percent={'11.4'}
                            />
                        </div>
                        <div className="right">
                            <Synth note="A4" />
                            <MoodElement element={'Tempo'} percent={'51'} />
                            <MoodElement element={'You 😇'} percent={'100'} />
                        </div>
                    </div>
                </section>
                <button
                    className="try-again-button"
                    onClick={() => console.log('try again')}
                >
                    Try Again
                </button>
            </main>
        </>
    );
};

export default MoodDisplay;
