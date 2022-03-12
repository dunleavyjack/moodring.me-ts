import React, { useEffect, useState } from 'react';

interface AnalyzingSongsProps {
    songs: any;
    profile: any;
}

const AnalyzingSongs: React.FC<AnalyzingSongsProps> = ({
    songs,
    profile,
}): JSX.Element => {
    const [currentlyAnalyizedSong, setCurrentlyAnalyzedSong] =
        useState<string>('');
    const [finishedAnalyzingSongs, setFinishedAnalyzingSongs] =
        useState<boolean>(false);

    useEffect(() => {
        songs.forEach((song: any, i: any) => {
            setTimeout(() => {
                console.log(song.name);
            }, i * 150);
        });
        setTimeout(() => {
            setFinishedAnalyzingSongs(true);
        }, 3150);
    }, []);

    return (
        <main className="page-content">
            <h1>hi we are analyzing songs over here hahaha</h1>
        </main>
    );
};

export default AnalyzingSongs;
