import React, { useEffect, useState } from 'react';
import CircularProfilePic from '../CircularProfilePic/CircularProfilePic';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import MoodElement from '../MoodElement/MoodElement';
import Synth from '../Synth/Synth';
import './MoodBreakdownList.css';

import { calculateMood } from '../../utils/moodDetector';

import profileImageLine from '../../assets/pageAssets/profileImageLine.png';
import expressive from '../../assets/moods/expressive.png';
import fullBreakdown from '../../assets/pageAssets/fullBreakdown.png';

interface Props {
    songs: any;
    profile: any;
}

const MoodDisplay: React.FC<Props> = ({ songs, profile }) => {
    const [finishedColorShiftAnimation, setFinishedColorShiftAnimation] =
        useState<boolean>(false);
    const [mood, setMood] = useState<any>('');

    console.log(mood);

    useEffect(() => {
        setMood(calculateMood(songs));
        setTimeout(() => {
            setFinishedColorShiftAnimation(true);
        }, 3000);
    }, [songs]);

    if (!finishedColorShiftAnimation) {
        return <LoadingAnimation />;
    }

    return (
        <>
            <main className="page-content scrollable">
                <section className="profile-display-container">
                    <CircularProfilePic imageURL={profile.images[0].url} />
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
