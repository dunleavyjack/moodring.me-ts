export interface UserResponse extends SpotifyApi.UserProfileResponse {}
export interface SongsResponse
    extends SpotifyApi.UsersRecentlyPlayedTracksResponse {}
export interface AudioFeaturesResponse
    extends SpotifyApi.MultipleAudioFeaturesResponse {}

export interface User {
    userName: string | undefined;
    imageURL: string;
}

export interface Song {
    name: string;
    album: string;
    artist: string;
    imageURL: string;
    playedAt: string;
    id: string;
}
export interface Songs extends Array<Song> {}

export interface AudioFeature {
    danceability: number;
    acousticness: number;
    energy: number;
    tempo: number;
    valence: number;
    key: number;
}

export interface AudioFeatures extends Array<AudioFeature> {}

export interface SpotifyAccessToken {
    access_token: string;
    token_type: string;
    expires_in: string;
}

export interface Mood {
    mood: string;
    danceability: number;
    acousticness: number;
    energy: number;
    tempo: number;
    valence: number;
    key: string;
}
