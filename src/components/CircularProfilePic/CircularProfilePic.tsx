import React from 'react';
import './CircularProfilePic.css';

interface CircularProfilePicProps {
    imageURL: string;
}

const CircularProfilePic: React.FC<CircularProfilePicProps> = ({
    imageURL,
}): JSX.Element => {
    return (
        <section className="circular-profile-picture">
            <img src={imageURL} alt="Circular profile" />
        </section>
    );
};

export default CircularProfilePic;
