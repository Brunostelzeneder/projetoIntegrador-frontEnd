import { Categoria } from './Categoria'

export class Produto {
    id: number;
    cor: string;
    instituicao: string;
    preco: number;
    quantidade: number;
    tamanho: string;
    categoria: Categoria;
}