export const setToken = (token: string) => {
    return {
        type: 'SET_TOKEN',
        payload: token,
    };
};
