import axios from 'axios';

// export const getParamValues = (url: string) => {
//     return url
//         .slice(1)
//         .split("&")
//         .reduce((prev, curr) => {
//             const [title, value] = curr.split("=");
//             prev[title] = value;
//             return prev;
//         }, {});
// }

export const setAuthHeader = (accessToken: string) => {
    try {
        if (accessToken) {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${accessToken}`;
        }
    } catch (error) {
        console.error("Error setting auth", error);
    }
};

// export const spotifyGetRequest = async (url: string, token: string) => {
//     setAuthHeader(token);
//     const result: any = await axios.get(url);
//     return result.data;
// };

// export const getSongAnalysis = async (id: string, token: string) => {
//     const songAnalysis = await spotifyGetRequest(
//         `https://api.spotify.com/v1/audio-features/?ids=${id}`,
//         token
//     );
//     return songAnalysis;
// };

// export const getUserProfile = async (token: string) => {
//     const userProfile: any = await spotifyGetRequest(
//         "https://api.spotify.com/v1/me/",
//         token
//     );
//     return userProfile;
// };

// export const getRecentlyPlayedTracks = async (token: string) => {
//     const recentlyPlayed = await spotifyGetRequest(
//         `https://api.spotify.com/v1/me/player/recently-played`,
//         token
//     );
//     return recentlyPlayed.items;
// };