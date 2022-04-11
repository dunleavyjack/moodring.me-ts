import React from 'react';
import { limitStringLength } from '../../utils/helpers';
import analyzingMusicText from '../../assets/pageAssets/dashboard/analyzingMusicText.png';
import backgroundRing from '../../assets/pageAssets/dashboard/albumCoverBackgroundRing.png';
import './SongDisplay.css';

interface SongDisplayProps {
    song: {
        name: string;
        artist: string;
        album: string;
        albumCoverURL: string;
    };
}

const SongDisplay: React.FC<SongDisplayProps> = ({
    song: { name, artist, album, albumCoverURL },
}): JSX.Element => {
    console.log('this is the sooooon', name);
    return (
        <main className="page-content">
            <img
                alt="Analyzing music"
                src={analyzingMusicText}
                className="analyzing-music"
            />
            <section className="album-cover-container">
                <img
                    alt="AlbumName cover"
                    src={albumCoverURL}
                    className="album-cover"
                />
                <img
                    alt="Album cover decoration"
                    src={backgroundRing}
                    className="album-cover-decoration"
                />
            </section>
            <section className="song-info">
                <h1 className="song-name">{limitStringLength(name)}</h1>
                <h2 className="artist-name">{limitStringLength(artist)}</h2>
                <h3 className="album-name">{limitStringLength(album)}</h3>
            </section>
        </main>
    );
};

export default SongDisplay;
