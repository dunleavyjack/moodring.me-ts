import axios from 'axios';
import { setAuthHeader } from '../utils/spotifyUtil';
import {
    User,
    UserResponse,
    Song,
    Songs,
    SongsResponse,
    AudioFeature,
    AudioFeatures,
    AudioFeaturesResponse,
} from '../types';

export const getUserProfile = async (): Promise<User | void> => {
    try {
        setAuthHeader();
        const { data } = await axios.get<UserResponse>(
            'https://api.spotify.com/v1/me/'
        );
        const imageURL: string =
            data.images && data.images[0].url
                ? data.images[0].url
                : 'default url';
        const user: User = {
            userName: data.display_name,
            imageURL,
        };
        return user;
    } catch (error) {
        console.error(error);
    }
};

export const getRecentSongs = async (): Promise<Songs | void> => {
    try {
        setAuthHeader();
        const { data } = await axios.get<SongsResponse>(
            'https://api.spotify.com/v1/me/player/recently-played'
        );
        const recentSongs: Songs = data.items.map((item) => {
            const recentSong: Song = {
                name: item.track.name,
                album: item.track.album.name,
                artist: item.track.artists[0].name,
                imageURL: item.track.album.images[0].url,
                playedAt: item.played_at,
                id: item.track.id,
            };
            return recentSong;
        });
        return recentSongs;
    } catch (error) {
        console.error(error);
    }
};

export const getRecentAudioFeatures = async (
    songs: Songs
): Promise<AudioFeatures | void> => {
    const songIds: string[] = songs.map((song: any) => song.id);
    try {
        setAuthHeader();
        const { data } = await axios.get<AudioFeaturesResponse>(
            `https://api.spotify.com/v1/audio-features/?ids=${songIds}`
        );

        const audioFeaturesBySong = data.audio_features.map((features) => {
            const songAudioFeature: AudioFeature = {
                danceability: features.danceability,
                acousticness: features.acousticness,
                energy: features.energy,
                valence: features.valence,
                tempo: features.tempo,
                key: features.key,
            };
            return songAudioFeature;
        });
        return audioFeaturesBySong;
    } catch (error) {
        console.error(error);
    }
};
