import React, { useEffect, useState } from 'react';
import SongDisplay from '../../components/SongDisplay/SongDisplay';
import MoodBreakdownList from '../MoodBreakdownList/MoodBreakdownList';

interface Props {
    songs: any;
    profile: any;
}

const AnalyzingSongs: React.FC<Props> = ({ songs, profile }) => {
    const [currentSong, setCurrentSong] = useState<any>({});
    const [finishedAnalyzingSongs, setFinishedAnalyzingSongs] =
        useState<boolean>(false);

    useEffect(() => {
        // Show user each album for 1.5 seconds
        songs.forEach((song: any, index: number) => {
            setTimeout(() => {
                setCurrentSong(song);
            }, index * 150);
        });

        // Finish showing albums after 31.5s
        setTimeout(() => {
            setFinishedAnalyzingSongs(true);
        }, 3150);
    }, [songs]);

    // Return loading screen while waiting for Spotify API request
    if (!finishedAnalyzingSongs) {
        const song = {
            name: currentSong.name,
            artist: currentSong.artist,
            album: currentSong.album,
            albumCoverURL: currentSong.imageURL,
        };
        return <SongDisplay song={song} />;
    }

    return <MoodBreakdownList songs={songs} profile={profile} />;
};

export default AnalyzingSongs;
