import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    getUserProfile,
    getRecentSongs,
    getRecentAudioFeatures,
} from '../api/spotifyAPI';
import { User, Songs } from '../types';

export const useFetchSpotify = () => {
    const [user, setUser] = useState<User | {}>();
    const [songs, setSongs] = useState<Songs | []>([]);
    const [audioFeatures, setAudioFeatures] = useState<
        SpotifyApi.MultipleAudioFeaturesResponse | []
    >([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchSongsAndUser = async () => {
            try {
                const userProfile: User | {} = await getUserProfile();
                setUser(userProfile);
                const recentSongs: Songs | [] = await getRecentSongs();
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
