import {
    emotionalFeatureNames,
    standardFeatureNames,
    getAverageValue,
    getPercentDifference,
    getPercentDifferenceString,
    getMatchedMood,
    getAverageNotatedKey,
} from './helpers';
import {
    AudioFeatures,
    EmotionalFeatures,
    StandardFeatures,
    Mood,
} from '../types';

export const calculateMood = (audioFeatures: AudioFeatures[]): Mood => {
    const emotionalFeatures: EmotionalFeatures[] = emotionalFeatureNames.map(
        (featureName: string) => {
            const averageValue: number = getAverageValue(
                audioFeatures,
                featureName
            );
            const percentDifference: number =
                getPercentDifference(averageValue);

            const percentDifferenceString: string = getPercentDifferenceString(
                featureName,
                percentDifference
            );
            return {
                featureName,
                averageValue,
                percentDifference: Math.abs(percentDifference),
                percentDifferenceString,
            };
        }
    );

    const sortedEmotionalFeatures: EmotionalFeatures[] = emotionalFeatures.sort(
        (a: EmotionalFeatures, b: EmotionalFeatures) =>
            Math.abs(b.percentDifference) - Math.abs(a.percentDifference)
    );

    const [firstEmotionalFeature, secondEmotionalFeature] =
        sortedEmotionalFeatures;

    const mood: string = getMatchedMood(
        firstEmotionalFeature,
        secondEmotionalFeature
    );

    const standardFeatures: StandardFeatures[] = standardFeatureNames.map(
        (featureName: string) => {
            const averageValue: number = getAverageValue(
                audioFeatures,
                featureName
            );

            if (featureName === 'key') {
                const averageNotatedKey: string =
                    getAverageNotatedKey(averageValue);
                return { featureName, averageValue, averageNotatedKey };
            }
            return { featureName, averageValue };
        }
    );

    const calculatedMood: Mood = {
        mood,
        emotionalFeatures,
        standardFeatures,
    };

    return calculatedMood;
};
