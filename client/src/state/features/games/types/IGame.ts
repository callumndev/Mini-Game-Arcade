import type { IGameCategory } from './IGameCategory'


export interface IGame {
    id: string;
    category: IGameCategory;
    displayName: string;
    description: string;
    href: string;
}
