import React, { useEffect, useState } from 'react';
import CircularProfilePic from '../CircularProfilePic/CircularProfilePic';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import MoodFeature from '../MoodFeature/MoodFeature';
import Synth from '../Synth/Synth';
import './MoodDisplay.css';
import { calculateMood } from '../../utils/moodUtil';
import profileImageLine from '../../assets/pageAssets/profileImageLine.png';
import expressive from '../../assets/moods/expressive.png';
import fullBreakdown from '../../assets/pageAssets/fullBreakdown.png';
import { store } from '../../store';
import {
    AudioFeatures,
    User,
    Songs,
    Mood,
    EmotionalFeatures,
    StandardFeatures,
} from '../../types';
import { EmptyMood } from '../../constants';

interface ReduxState {
    user: User;
    recentSongs: Songs[];
    audioFeatures: AudioFeatures[];
}

const MoodDisplay: React.FC = () => {
    const { user, audioFeatures }: ReduxState = store.getState();
    const [finishedColorShiftAnimation, setFinishedColorShiftAnimation] =
        useState<boolean>(false);
    const [mood, setMood] = useState<Mood>(EmptyMood);

    useEffect(() => {
        const mood: Mood = calculateMood(audioFeatures);
        setMood(mood);
        setTimeout(() => {
            setFinishedColorShiftAnimation(true);
        }, 3000);
    }, [audioFeatures]);

    if (!finishedColorShiftAnimation) {
        return <LoadingAnimation />;
    }

    const emotionalFeaturesList = (): JSX.Element[] => {
        return mood.emotionalFeatures.map(
            (emotionalFeature: EmotionalFeatures, index: number) => {
                return (
                    <MoodFeature
                        feature={emotionalFeature.percentDifferenceString}
                        percent={`${emotionalFeature.percentDifference.toFixed(
                            2
                        )}%`}
                        key={index}
                    />
                );
            }
        );
    };

    const averageTempo: string =
        mood.standardFeatures
            .find(
                (feature: StandardFeatures) => feature.featureName === 'tempo'
            )
            ?.averageValue.toFixed(0) || '0';

    const averageNotatedKey: string =
        mood.standardFeatures.find(
            (feature: StandardFeatures) => feature.featureName === 'key'
        )?.averageNotatedKey || 'A#';

    return (
        <>
            <main className="page-content scrollable">
                <section className="profile-display-container">
                    <CircularProfilePic imageURL={user.imageURL} />
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
                        {mood.emotionalFeatures[0].percentDifference.toFixed(2)}
                        % {mood?.emotionalFeatures[0].percentDifferenceString}{' '}
                        {'and'}{' '}
                        {mood.emotionalFeatures[1].percentDifference.toFixed(2)}
                        % {mood.emotionalFeatures[1].percentDifferenceString}{' '}
                        than average.
                    </h2>
                </section>
                <section className="breakdown-container">
                    <img
                        alt="Full Breakdown"
                        src={fullBreakdown}
                        className="full-breakdown"
                    />
                    <div className="mood-display-grid">
                        <div className="left">{emotionalFeaturesList()}</div>
                        <div className="right">
                            <Synth note={averageNotatedKey} />
                            <MoodFeature
                                feature={'bpm'}
                                percent={averageTempo}
                            />
                            <MoodFeature feature="You 😇" percent="100%" />
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
