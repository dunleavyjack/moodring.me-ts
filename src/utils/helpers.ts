import { AudioFeatures, EmotionalFeatures } from '../types';

export const emotionalFeatureNames: string[] = [
    'danceability',
    'acousticness',
    'energy',
    'valence',
];

export const standardFeatureNames: string[] = ['tempo', 'key'];

export const getAverageValue = (
    audioFeatures: AudioFeatures[],
    featureName: string
): number => {
    return (
        audioFeatures.reduce(
            (total: number, next: AudioFeatures) =>
                total + next[featureName as keyof typeof next],
            0
        ) / audioFeatures.length
    );
};

export const getPercentDifference = (averageValue: number): number => {
    return ((averageValue - 0.5) / 0.5) * 100;
};

export const getPercentDifferenceString = (
    featureName: string,
    percentDifference: number
): string => {
    switch (featureName) {
        case 'danceability':
            return percentDifference > 0
                ? 'higher danceability'
                : 'lower danceability';
        case 'energy':
            return percentDifference > 0 ? 'higher energy' : 'lower energy';
        case 'valence':
            return percentDifference > 0 ? 'more happiness' : 'less happiness';
        case 'acousticness':
            return percentDifference > 0
                ? 'more acousticness'
                : 'less acousticness';
        default:
            return '';
    }
};

export const getMatchedMood = (
    firstEmotionalFeature: EmotionalFeatures,
    secondEmotionalFeature: EmotionalFeatures
): string => {
    const emotionalFeatures: string[] = [
        firstEmotionalFeature.percentDifferenceString,
        secondEmotionalFeature.percentDifferenceString,
    ];

    if (
        emotionalFeatures.includes('more happiness') &&
        emotionalFeatures.includes('lower danceability')
    ) {
        return 'peaceful';
    } else if (
        emotionalFeatures.includes('more happiness') &&
        emotionalFeatures.includes('lower energy')
    ) {
        return 'reflective';

        // Matching: Higher + Lower (Danceability)
    } else if (
        emotionalFeatures.includes('higher danceability') &&
        emotionalFeatures.includes('less happiness')
    ) {
        return 'melancholic';
    } else if (
        emotionalFeatures.includes('higher danceability') &&
        emotionalFeatures.includes('lower energy')
    ) {
        return 'a bit tense';

        // Matching: Higher + Lower (Energy)
    } else if (
        emotionalFeatures.includes('higher energy') &&
        emotionalFeatures.includes('less happiness')
    ) {
        return 'a bit gloomy';
    } else if (
        emotionalFeatures.includes('higher energy') &&
        emotionalFeatures.includes('lower danceability')
    ) {
        return 'nervous';

        // Matching: Higher + Higher (All)
    } else if (
        emotionalFeatures.includes('more happiness') &&
        emotionalFeatures.includes('higher danceability')
    ) {
        return 'expressive';
    } else if (
        emotionalFeatures.includes('more happiness') &&
        emotionalFeatures.includes('higher energy')
    ) {
        return 'elated';
    } else if (
        emotionalFeatures.includes('higher danceability') &&
        emotionalFeatures.includes('higher energy')
    ) {
        return 'electric';

        // Matching: Lower + Lower (All)
    } else if (
        emotionalFeatures.includes('less happiness') &&
        emotionalFeatures.includes('lower danceability')
    ) {
        return 'a little blue';
    } else if (
        emotionalFeatures.includes('less happiness') &&
        emotionalFeatures.includes('lower energy')
    ) {
        return 'a bit gloomy';
    } else if (
        emotionalFeatures.includes('lower danceability') &&
        emotionalFeatures.includes('lower energy')
    ) {
        return 'sleepy';
    }
    return 'confused';
};

export const getAverageNotatedKey = (averageValue: number): string => {
    switch (Math.round(averageValue)) {
        case 0:
            return 'C';
        case 1:
            return 'C#';
        case 2:
            return 'D';
        case 3:
            return 'D#';
        case 4:
            return 'E';
        case 5:
            return 'F';
        case 6:
            return 'F#';
        case 7:
            return 'G';
        case 8:
            return 'G#';
        case 9:
            return 'A';
        case 10:
            return 'A#';
        case 11:
            return 'B';
        default:
            return '';
    }
};
