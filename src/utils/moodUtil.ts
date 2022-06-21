import { AudioFeature, AudioFeatures, MoodAverage } from '../types';

// const avgDanceability: number = 0.5;
// const avgAcousticness: number = 0.5;
// const avgEnergy: number = 0.5;
// const avgValence: number = 0.5;

// const maxDanceability: number = 1;
// const maxAcousticness: number = 1;
// const maxEnergy: number = 1;
// const maxValence: number = 1;

// export const calculateMood = (recentSongAudioFeatures: AudioFeatures) => {
//     const danceability: number = getAverage(
//         recentSongAudioFeatures.map(
//             (eachSong: AudioFeature) => eachSong.danceability
//         )
//     );
//     const acousticness: number = getAverage(
//         recentSongAudioFeatures.map(
//             (eachSong: AudioFeature) => eachSong.acousticness
//         )
//     );
//     const energy: number = getAverage(
//         recentSongAudioFeatures.map((eachSong: AudioFeature) => eachSong.energy)
//     );
//     const tempo: number = getAverage(
//         recentSongAudioFeatures.map((eachSong: AudioFeature) => eachSong.tempo)
//     );
//     const valence: number = getAverage(
//         recentSongAudioFeatures.map(
//             (eachSong: AudioFeature) => eachSong.valence
//         )
//     );
//     const key: number = getAverage(
//         recentSongAudioFeatures.map((eachSong: AudioFeature) => eachSong.key)
//     );

//     // Get the averages
//     const danceabilityDifference: string =
//         getDanceabilityDifference(danceability);
//     const acousticnessDifference: string =
//         getAcousticnessDifference(acousticness);
//     const energyDifference: string = getEnergyDifference(energy);
//     const valenceDifference: string = getValenceDifference(valence);
//     const notatedKey: string | undefined = getNotatedKey(key);

//     const differenceArray: string[] = [
//         valenceDifference,
//         energyDifference,
//         danceabilityDifference,
//     ].sort(
//         (a: any, b: any) =>
//             parseFloat(b?.difference) - parseFloat(a?.difference)
//     );

//     // Get two moods with highest percent difference
//     const firstMood: any = differenceArray[0];
//     const secondMood: any = differenceArray[1];
//     const thirdMood: string = differenceArray[2];
//     const topMoodsOnly: string[] = [firstMood.mood, secondMood.mood];
//     const result: string = matchMood(topMoodsOnly);
//     const conjuction: string = getConjuction(topMoodsOnly);

//     const resultArray: any = {
//         name: result,
//         conjuction,
//         firstMood,
//         secondMood,
//         thirdMood,
//         acousticnessDifference,
//         key: notatedKey,
//         tempo: tempo.toFixed(2),
//     };
//     console.log(resultArray);
//     return resultArray;
// };

// const percentDifference = (
//     value: number,
//     avgValue: number,
//     maxValue: number
// ) => {
//     if (value > avgValue) {
//         const difference = ((value - avgValue) / (maxValue - avgValue)) * 100;
//         return {
//             difference,
//             aboveAvg: true,
//         };
//     }
//     if (value < avgValue) {
//         const difference = ((avgValue - value) / (maxValue - avgValue)) * 100;
//         return {
//             difference,
//             aboveAvg: false,
//         };
//     }
// };

const getPercentDifference = (num: number) => {
    const avgValue = 0.5;
    const difference: number = Math.abs((num - avgValue)
};


export const calculateMood = (audioFeatures: AudioFeatures) => {
    const songFeatures: any = [ 'danceability', 'acousticness', 'energy', 'valence', 'tempo', 'key' ];

    let moodAverages: any = {};
    songFeatures.forEach(( feature: | 'danceability' | 'acousticness' | 'energy' | 'valence'| 'tempo' | 'key') => {
            const averageValue: number = audioFeatures.reduce((total, next) => total + next[feature], 0) / audioFeatures.length;
            const averagePercentDifference: number = getPercentDifference(averageValue) 
            
            
            
            moodAverages[`${mood}Average`] = {averageValue, percentDifference, };
        }
    );


};

const matchMood = (moodNames: any): string => {
    // Matching: Higher + Lower (Valence)
    if (
        moodNames.includes('more-happiness') &&
        moodNames.includes('lower-danceability')
    ) {
        return 'peaceful';
    } else if (
        moodNames.includes('more-happiness') &&
        moodNames.includes('lower-energy')
    ) {
        return 'reflective';

        // Matching: Higher + Lower (Danceability)
    } else if (
        moodNames.includes('higher-danceability') &&
        moodNames.includes('less-happiness')
    ) {
        return 'melancholic';
    } else if (
        moodNames.includes('higher-danceability') &&
        moodNames.includes('lower-energy')
    ) {
        return 'a bit tense';

        // Matching: Higher + Lower (Energy)
    } else if (
        moodNames.includes('higher-energy') &&
        moodNames.includes('less-happiness')
    ) {
        return 'a bit gloomy';
    } else if (
        moodNames.includes('higher-energy') &&
        moodNames.includes('lower-danceability')
    ) {
        return 'nervous';

        // Matching: Higher + Higher (All)
    } else if (
        moodNames.includes('more-happiness') &&
        moodNames.includes('higher-danceability')
    ) {
        return 'expressive';
    } else if (
        moodNames.includes('more-happiness') &&
        moodNames.includes('higher-energy')
    ) {
        return 'elated';
    } else if (
        moodNames.includes('higher-danceability') &&
        moodNames.includes('higher-energy')
    ) {
        return 'electric';

        // Matching: Lower + Lower (All)
    } else if (
        moodNames.includes('less-happiness') &&
        moodNames.includes('lower-danceability')
    ) {
        return 'a little blue';
    } else if (
        moodNames.includes('less-happiness') &&
        moodNames.includes('lower-energy')
    ) {
        return 'a bit gloomy';
    } else if (
        moodNames.includes('lower-danceability') &&
        moodNames.includes('lower-energy')
    ) {
        return 'sleepy';
    }
    return 'confused';
};

const getNotatedKey = (num: number): string => {
    switch (Math.round(num)) {
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
            return 'C';
    }
};

const getValenceDifference = (valenceScore: number): string => {
    const result: any = percentDifference(valenceScore, avgValence, maxValence);
    result.name = 'valence';
    if (result.aboveAvg === true) {
        result.mood = 'more-happiness';
    } else {
        result.mood = 'less-happiness';
    }
    return result;
};

const getEnergyDifference = (energyScore: number): string => {
    const result: any = percentDifference(energyScore, avgEnergy, maxEnergy);
    result.name = 'energy';
    if (result.aboveAvg === true) {
        result.mood = 'higher-energy';
    } else {
        result.mood = 'lower-energy';
    }
    return result;
};

const getDanceabilityDifference = (danceabilityScore: number): string => {
    const result: any = percentDifference(
        danceabilityScore,
        avgDanceability,
        maxDanceability
    );
    result.name = 'danceability';
    if (result.aboveAvg === true) {
        result.mood = 'higher-danceability';
    } else {
        result.mood = 'lower-danceability';
    }
    return result;
};

const getAcousticnessDifference = (acousticnessScore: number): string => {
    const result: any = percentDifference(
        acousticnessScore,
        avgAcousticness,
        maxAcousticness
    );
    result.name = 'acousticness';
    if (result.aboveAvg === true) {
        result.mood = 'higher-acousticness';
    } else {
        result.mood = 'lower-acousticness';
    }
    return result;
};

// Percent Difference
const percentDifference = (
    value: number,
    avgValue: number,
    maxValue: number
) => {
    if (value > avgValue) {
        const difference = ((value - avgValue) / (maxValue - avgValue)) * 100;
        return {
            difference,
            aboveAvg: true,
        };
    }
    if (value < avgValue) {
        const difference = ((avgValue - value) / (maxValue - avgValue)) * 100;
        return {
            difference,
            aboveAvg: false,
        };
    }
};

// Get the proper conjuction ('and'/'but') for the display page
const getConjuction = (moodArr: any) => {
    if (
        (moodArr[0].includes('less') || moodArr[0].includes('lower')) &&
        (moodArr[1].includes('more') || moodArr[1].includes('higher'))
    ) {
        return 'but';
    } else if (
        (moodArr[0].includes('more') || moodArr[0].includes('higher')) &&
        (moodArr[1].includes('less') || moodArr[1].includes('lower'))
    ) {
        return 'but';
    } else {
        return 'and';
    }
};

// Get Average
export const getAverage = (arr: any) => {
    let reducer: any = (total: any, currentValue: any) => total + currentValue;
    let sum = arr.reduce(reducer);
    return sum / arr.length;
};
