import { combineReducers } from "redux";

interface SetTokenAction {
    type: "SET_TOKEN"
    payload: string
}

interface SetMoodAction {
    type: "SET_MOOD"
    payload: string
}

type Action = SetTokenAction | SetMoodAction 

const setToken = (tokens = null, action: Action) => {
    switch(action.type){
        case "SET_TOKEN":
            return action.payload;
        default:
            return tokens
    }
}

const setMood = (mood = null, action: Action) => {
    switch(action.type){
        case "SET_MOOD":
            return action.payload;
        default:
            return mood
    }
}

export default combineReducers({
    token: setToken,
    mood: setMood 
})