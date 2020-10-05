import { Produto } from './Produto';

export class Categoria {
    id: number;
    genero: string;
    manga: string;
    tema: string;
    produto: Produto[];
}