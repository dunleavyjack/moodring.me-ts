import React from 'react';
import { getSpotifyAccessToken } from '../../api/spotifyAPI';

const RedirectPage = () => {
    const currentLocation: string = window.location.hash;
    const { access_token } = getSpotifyAccessToken(currentLocation);
    console.log(access_token);

    return <div>redirect</div>;
};

export default RedirectPage;
