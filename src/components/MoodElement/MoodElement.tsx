import React from 'react';
import './MoodElement.css';
import { emojis, EmojisInterface } from '../../utils/emojis';

interface Props {
    element: string;
    percent: string;
}

const MoodElement: React.FC<Props> = ({ element, percent }) => {
    return (
        <section className="mood-element-container">
            <h2 hidden>Mood Analytic description</h2>
            <h3 className="mood-element-emoji">
                {emojis[element.toLowerCase() as keyof EmojisInterface]}
            </h3>
            <h3 className="mood-element-percent">{percent}%</h3>
            <h4 className="mood-element-name">{element}</h4>
        </section>
    );
};

export default MoodElement;
