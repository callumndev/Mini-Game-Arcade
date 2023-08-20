export interface IGameCategory {
    name: 'strategy' | 'puzzle' | 'arcade' | 'guessing';
    icon: string;
}


export const strategyCategory: IGameCategory = {
    name: 'strategy',
    icon: '\u265F',
}

export const puzzleCategory: IGameCategory = {
    name: 'puzzle',
    icon: '\uD83E\uDDE9',
}

export const arcadeCategory: IGameCategory = {
    name: 'arcade',
    icon: '\uD83C\uDF79',
}

export const guessingCategory: IGameCategory = {
    name: 'guessing',
    icon: '\u2753',
}
