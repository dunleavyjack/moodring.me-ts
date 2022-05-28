import React, { useState, useEffect } from 'react';
import AnalyzingSongs from '../../components/AnalyzingSongs/AnalyzingSongs';
import { useFetchSpotify } from '../../hooks/useFetchSpotify';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';

const YourMood: React.FC = () => {
    const [finishedLoading, setFinishedLoading] = useState(false);
    const { user, songs, audioFeatures } = useFetchSpotify();
    console.log(audioFeatures);

    useEffect(() => {
        setTimeout(() => {
            setFinishedLoading(true);
        }, 3000);
    });

    if (!finishedLoading) {
        return <LoadingAnimation />;
    }

    return <AnalyzingSongs songs={songs} profile={user} />;
};

export default YourMood;
