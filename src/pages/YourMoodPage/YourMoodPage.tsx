import React from 'react';
import AnalyzingSongs from '../../components/AnalyzingSongs/AnalyzingSongs';
import { useFetchSpotify } from '../../hooks/useFetchSpotify';
import { useLoadingTimer } from '../../hooks/useLoadingTimer';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';

const YourMood: React.FC = () => {
    const { user, songs, audioFeatures } = useFetchSpotify();
    const finishedLoading = useLoadingTimer();

    if (!finishedLoading) {
        return <LoadingAnimation />;
    }

    return (
        <AnalyzingSongs
            songs={songs}
            user={user}
            audioFeatures={audioFeatures}
        />
    );
};

export default YourMood;
