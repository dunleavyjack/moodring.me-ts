import React from 'react';
import './MoodElement.css';
import { emojis, EmojisInterface } from '../../utils/emojis';

interface MoodElementProps {
    element: string;
    percent: string;
}

const MoodElement: React.FC<MoodElementProps> = ({
    element,
    percent,
}): JSX.Element => {
    return (
        <section className="">
            <h2 hidden>Mood Analytic description</h2>
            <h3>{emojis[element.toLowerCase() as keyof EmojisInterface]}</h3>
            <h3>{element}</h3>
            <h4>{percent}</h4>
        </section>
    );
};

export default MoodElement;
