import { combineReducers } from 'redux';
import { Songs, User, AudioFeatures } from '../types';

interface SetToken {
    type: 'SET_TOKEN';
    payload: string;
}

interface SetIsDemo {
    type: 'SET_DEMO_STATUS';
    payload: boolean;
}
interface SetUser {
    type: 'SET_USER';
    payload: User;
}
interface SetRecentSongs {
    type: 'SET_RECENT_SONGS';
    payload: Songs;
}
interface SetAudioFeatures {
    type: 'SET_AUDIO_FEATURES';
    payload: AudioFeatures;
}
interface SetMood {
    type: 'SET_MOOD';
    payload: string;
}

type Action =
    | SetToken
    | SetIsDemo
    | SetUser
    | SetRecentSongs
    | SetAudioFeatures
    | SetMood;

const setToken = (tokens = null, action: Action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return action.payload;
        default:
            return tokens;
    }
};

const setIsDemo = (isDemo = false, action: Action) => {
    switch (action.type) {
        case 'SET_DEMO_STATUS':
            return action.payload;
        default:
            return isDemo;
    }
};

const setUser = (user = null, action: Action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.payload;
        default:
            return user;
    }
};

const setRecentSongs = (recentSongs = [], action: Action) => {
    switch (action.type) {
        case 'SET_RECENT_SONGS':
            return action.payload;
        default:
            return recentSongs;
    }
};

const setAudioFeatures = (audioFeatures = [], action: Action) => {
    switch (action.type) {
        case 'SET_AUDIO_FEATURES':
            return action.payload;
        default:
            return audioFeatures;
    }
};

const setMood = (mood = null, action: Action) => {
    switch (action.type) {
        case 'SET_MOOD':
            return action.payload;
        default:
            return mood;
    }
};

export default combineReducers({
    token: setToken,
    isDemo: setIsDemo,
    user: setUser,
    recentSongs: setRecentSongs,
    audioFeatures: setAudioFeatures,
    mood: setMood,
});
