export interface EmojisInterface {
    readonly 'more happiness': string;
    readonly 'less happiness': string;
    readonly 'more danceability': string;
    readonly 'less danceability': string;
    readonly 'more energy': string;
    readonly 'less energy': string;
    readonly 'more acousticness': string;
    readonly 'less acousticness': string;
    readonly tempo: string;
    readonly you: string;
}

export const emojis: EmojisInterface = {
    'more happiness': '🐶',
    'less happiness': '🥺',
    'more danceability': '🕺',
    'less danceability': '🛌',
    'more energy': '⚡',
    'less energy': '😴',
    'more acousticness': '🍵',
    'less acousticness': '🎸',
    tempo: '', // blank (no emoji)
    you: '', // blank (no emoji)
};
