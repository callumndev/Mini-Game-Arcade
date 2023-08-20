import type { IGame } from '../types/IGame'
import { strategyCategory, puzzleCategory, arcadeCategory, guessingCategory } from '../types/IGameCategory'


const mockHubGames: IGame[] = [
    {
        id: 'snake',
        category: arcadeCategory,
        displayName: 'Snake',
        description: 'Snake is a classic arcade game where players control a growing snake, aiming to eat food while avoiding collisions with walls and the snake\'s own tail.',
        href: '/games/snake',
    },
    {
        id: 'pong',
        category: arcadeCategory,
        displayName: 'Pong',
        description: 'Pong is one of the earliest arcade video games. Players control paddles to hit a ball back and forth, trying to score points against the opponent.',
        href: '/games/pong',
    },
    {
        id: 'tetris',
        category: puzzleCategory,
        displayName: 'Tetris',
        description: 'Tetris is a puzzle game where players arrange falling blocks of different shapes to create complete lines and prevent the stack from reaching the top.',
        href: '/games/tetris',
    },
    {
        id: 'hangman',
        category: guessingCategory,
        displayName: 'Hangman',
        description: 'Hangman is a word-guessing game where players attempt to guess a hidden word letter by letter while avoiding too many incorrect guesses.',
        href: '/games/hangman',
    },
    {
        id: 'tic-tac-toe',
        category: strategyCategory,
        displayName: 'Tic Tac Toe',
        description: 'Tic Tac Toe is a classic paper-and-pencil game where two players take turns marking cells on a 3x3 grid, aiming to create a row, column, or diagonal of their symbol.',
        href: '/games/tic-tac-toe',
    },
    {
        id: 'connect-four',
        category: strategyCategory,
        displayName: 'Connect 4',
        description: 'Connect 4 is a strategic board game where two players take turns dropping colored discs into a grid with the goal of connecting four of their discs vertically, horizontally, or diagonally.',
        href: '/games/connect-four',
    },
]

export default mockHubGames;
