import axios from 'axios';
import { setAuthHeader } from '../utils/spotifyUtil';
import { User, Songs, AudioFeatures } from '../types';

export const getUserProfile = async () => {
    try {
        setAuthHeader();
        const userProfile: User = await axios.get(
            'https://api.spotify.com/v1/me/'
        );
        return userProfile;
    } catch (error) {
        console.error(error);
    }
};

export const getRecentSongs = async () => {
    try {
        setAuthHeader();
        const { data } = await axios.get(
            'https://api.spotify.com/v1/me/player/recently-played'
        );
        const { items: songs }: Songs = data;
        return songs;
    } catch (error) {
        console.error(error);
    }
};

export const getRecentAudioFeatures = async (songs: Songs[]) => {
    const songIds: string[] = songs.map((song: any) =>
        song.track.id.toString()
    );
    try {
        setAuthHeader();
        const { data } = await axios.get(
            `https://api.spotify.com/v1/audio-features/?ids=${songIds}`
        );
        const { audio_features: audioFeatures }: AudioFeatures = data;
        return audioFeatures;
    } catch (error) {
        console.error(error);
    }
};
