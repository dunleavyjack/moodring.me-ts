import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    getUserProfile,
    getRecentSongs,
    getRecentAudioFeatures,
} from '../api/spotifyAPI';

export const useFetchSpotify = () => {
    const [user, setUser] = useState({});
    const [songs, setSongs] = useState<
        SpotifyApi.UsersRecentlyPlayedTracksResponse | []
    >([]);
    const [audioFeatures, setAudioFeatures] = useState<
        SpotifyApi.MultipleAudioFeaturesResponse | []
    >([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchSongsAndUser = async () => {
            try {
                const userProfile: any = await getUserProfile();
                setUser(userProfile);
                const recentSongs: any = await getRecentSongs();
                setSongs(recentSongs);
                const recentAudioFeatures: any = await getRecentAudioFeatures(
                    recentSongs
                );
                setAudioFeatures(recentAudioFeatures);
            } catch (error) {
                console.error(error);
                navigate('/error');
            }
        };
        fetchSongsAndUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return { user, songs, audioFeatures };
};
