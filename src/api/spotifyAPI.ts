import axios from 'axios';
import { User, SongsAndAudioFeatures } from '../types';
import { EmptyUser, EmptySongsAndAudioFeatures } from '../constants';
import { store } from '../store';

export const getUserProfile = async (): Promise<User> => {
    const accessToken: string = store.getState().session.token;
    try {
        const { data } = await axios.get(
            `http://localhost:3001/users/${accessToken}`
        );
        return data;
    } catch (error) {
        console.error(error);
        return EmptyUser;
    }
};

export const getRecentSongsAndAudioFeatures =
    async (): Promise<SongsAndAudioFeatures> => {
        const accessToken: string = store.getState().session.token;
        try {
            const { data } = await axios.get(
                `http://localhost:3001/songs/${accessToken}`
            );
            return data;
        } catch (error) {
            console.error(error);
            return EmptySongsAndAudioFeatures;
        }
    };
