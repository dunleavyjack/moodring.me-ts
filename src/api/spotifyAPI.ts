export const getSpotifyAccessToken = (spotifyRedirectURL: string) => {
    return spotifyRedirectURL
        .slice(1)
        .split("&")
        .reduce((prev: any, curr: string) => {
            const [title, value] = curr.split("=");
            prev[title] = value;
            return prev;
    }, {})

} 