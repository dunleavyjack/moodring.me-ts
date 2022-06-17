import React from 'react';
import { useAnalyzingSongs } from '../../hooks/useAnalyzingSongs';
import { store } from '../../store';
import SongDisplay from '../SongDisplay/SongDisplay';
import MoodDisplay from '../MoodDisplay/MoodDisplay';

const AnalyzingSongsAnimation: React.FC = () => {
    const { recentSongs } = store.getState();
    const { currentSong, finishedAnalyzingSongs } =
        useAnalyzingSongs(recentSongs);

    if (!finishedAnalyzingSongs) {
        return <SongDisplay song={currentSong} />;
    }

    return <MoodDisplay />;
};

export default AnalyzingSongsAnimation;
