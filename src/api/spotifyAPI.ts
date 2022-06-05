import axios from 'axios';
import { setAuthHeader } from '../utils/spotifyUtil';
import {
    UserResponse,
    SongsResponse,
    AudioFeaturesResponse,
    User,
    Song,
    Songs,
    AudioFeature,
    AudioFeatures,
} from '../types';

export const getUserProfile = async (): Promise<User | {}> => {
    try {
        setAuthHeader();
        const {
            data: { display_name, images },
        } = await axios.get<UserResponse>('https://api.spotify.com/v1/me/');
        // const { display_name, images }: UserResponse = data;

        const user: User = {
            userName: display_name,
            imageURL: images,
        };
        console.log('THIS IS THE USER', user);
        return user;
    } catch (error) {
        console.error(error);
        return {};
    }
};

export const getRecentSongs = async (): Promise<Songs | []> => {
    try {
        setAuthHeader();
        const {
            data: { items },
        } = await axios.get<SongsResponse>(
            'https://api.spotify.com/v1/me/player/recently-played'
        );
        // const { items }: SongsResponse = data;

        const recentSongs: Songs = items.map((item) => {
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
        return [];
    }
};

export const getRecentAudioFeatures = async (
    songs: Songs
): Promise<AudioFeatures | []> => {
    const songIds: string[] = songs.map((song: any) => song.id);
    try {
        setAuthHeader();
        const {
            data: { audio_features },
        } = await axios.get<AudioFeaturesResponse>(
            `https://api.spotify.com/v1/audio-features/?ids=${songIds}`
        );

        const audioFeaturesBySong = audio_features.map((features) => {
            const songAudioFeature: AudioFeature = {
                danceability: features.danceability,
                acousticness: features.acousticness,
                energy: features.energy,
                tempo: features.tempo,
                valence: features.valence,
                key: features.key,
            };
            return songAudioFeature;
        });
        return audioFeaturesBySong;
    } catch (error) {
        console.error(error);
        return [];
    }
};
