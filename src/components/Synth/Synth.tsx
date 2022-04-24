import React from 'react';
import * as Tone from 'tone';
import synth from '../../assets/synth/synth.svg';
import './Synth.css';

interface Props {
    note: string;
}

const Synth: React.FC<Props> = ({ note }) => {
    const playTone = (musicalNote: string) => {
        const synth: Tone.Synth<Tone.SynthOptions> =
            new Tone.Synth().toDestination();
        const now: number = Tone.now();

        // Start note immediately
        synth.triggerAttack(musicalNote, now);
        // Finish note after one second
        synth.triggerRelease(now + 1);
        Tone.start();
    };

    return (
        <section className="synth-container">
            <h3>
                <span>{note} </span>Average Key
            </h3>
            <img
                src={synth}
                alt="Synth"
                className="synth"
                onClick={() => playTone(note)}
            />
            <button className="synth-button" onClick={() => playTone(note)}>
                Press to listen to your mood sound
            </button>
        </section>
    );
};

export default Synth;
