export interface User extends SpotifyApi.UserProfileResponse {}

export interface Songs extends SpotifyApi.UsersRecentlyPlayedTracksResponse {}

export interface AudioFeatures
    extends SpotifyApi.MultipleAudioFeaturesResponse {}

export interface SpotifyAccessToken {
    access_token: string;
    token_type: string;
    expires_in: string;
}
