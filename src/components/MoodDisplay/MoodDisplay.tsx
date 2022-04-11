import React, { useEffect, useState } from 'react';
import CircularProfilePic from '../../components/CircularProfilePic/CircularProfilePic';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import MoodElement from '../MoodElement/MoodElement';
import './MoodDisplay.css';

import { calculateMood } from '../../utils/moodDetector';

import profileImageLine from '../../assets/pageAssets/profileImageLine.png';
import expressive from '../../assets/moods/expressive.png';
import fullBreakdown from '../../assets/pageAssets/fullBreakdown.png';

interface MoodDisplayProps {
    songs: any;
    profile: any;
}

const MoodDisplay: React.FC<MoodDisplayProps> = ({
    songs,
    profile,
}): JSX.Element => {
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
                <img alt="Your Mood" src={expressive} className="your-mood" />
            </section>
            <section>
                <h2 className="mood-description">
                    Your recent songs have{' '}
                    {mood.firstMood.difference.toFixed(2)}%{' '}
                    {mood.firstMood.mood.replace('-', ' ')} {mood.conjuction}{' '}
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
                <MoodElement element={'Happiness'} percent={'50.2'} />
                <h1>hi</h1>
                <h1>hi</h1>
                <h1>hi</h1>
                <h1>hi</h1>
                <h1>hi</h1>
                <h1>hi</h1>
                <h1>hi</h1>
                <h1>hi</h1>
                <h1>hi</h1>
                <h1>hi</h1>
                <h1>hi</h1>
                <h1>hi</h1>
                <h1>hi</h1>
                <h1>hi</h1>
            </section>
        </main>
    );
};

export default MoodDisplay;
