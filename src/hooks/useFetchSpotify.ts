import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    getUserProfile,
    getRecentSongs,
    getRecentAudioFeatures,
} from '../api/spotifyAPI';
import { setRecentSongs, setUser, setAudioFeatures } from '../actions';
import { User, Songs, AudioFeatures } from '../types';
import { store } from '../store';
import {
    demoUser,
    demoRecentSongs,
    demoAudioFeatures,
} from '../assets/demo/demoSampleData';

export const useFetchSpotify = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isDemo } = store.getState().session;
    const [spotifyRequestsComplete, setSpotifyRequestsComplete] =
        useState<boolean>(false);

    useEffect(() => {
        const fetchSongsAndUser = async () => {
            try {
                const userProfile: User | void = await getUserProfile();
                if (userProfile) {
                    dispatch(setUser(userProfile));
                }
                const recentSongs: Songs | void = await getRecentSongs();
                if (recentSongs) {
                    dispatch(setRecentSongs(recentSongs));

                    // Song ids from recent songs are needed to request recent song audio features
                    const recentAudioFeatures: AudioFeatures | void =
                        await getRecentAudioFeatures(recentSongs);
                    if (recentAudioFeatures) {
                        dispatch(setAudioFeatures(recentAudioFeatures));
                    }
                    setSpotifyRequestsComplete(true);
                }
            } catch (error) {
                console.error(error);
                navigate('/error');
            }
        };

        const setSampleSongsAndUser = () => {
            dispatch(setUser(demoUser));
            dispatch(setRecentSongs(demoRecentSongs));
            dispatch(setAudioFeatures(demoAudioFeatures));
            setSpotifyRequestsComplete(true);
        };

        isDemo ? setSampleSongsAndUser() : fetchSongsAndUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return spotifyRequestsComplete;
};
