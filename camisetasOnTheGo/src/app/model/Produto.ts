import { Categoria } from './Categoria'

export class Produto {
    id: number;
    nome: string;
    linkImagem: string;
    instituicao: string;
    preco: number;
    quantidade: number;
    tamanho: string;
    categoria: Categoria;
}