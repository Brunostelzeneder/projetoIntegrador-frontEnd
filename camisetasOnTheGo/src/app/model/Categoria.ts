import { Produto } from './Produto';

export class Categoria {
    id: number;
    descricao: string;
    genero: string;
    manga: string;
    tema: string;
    produto: Produto[];
}