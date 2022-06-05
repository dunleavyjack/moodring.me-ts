import React from 'react';
import SongDisplay from '../../components/SongDisplay/SongDisplay';
import MoodBreakdownList from '../MoodBreakdownList/MoodBreakdownList';
import { useAnalyzingSongs } from '../../hooks/useAnalyzingSongs';

interface Props {
    songs: any;
    user: any;
    audioFeatures: any;
}

const AnalyzingSongs: React.FC<Props> = ({ songs, user, audioFeatures }) => {
    const { currentSong, finishedAnalyzingSongs } = useAnalyzingSongs(songs);

    if (!finishedAnalyzingSongs) {
        return <SongDisplay song={currentSong} />;
    }

    return (
        <MoodBreakdownList
            songs={songs}
            user={user}
            audioFeatures={audioFeatures}
        />
    );
};

export default AnalyzingSongs;
