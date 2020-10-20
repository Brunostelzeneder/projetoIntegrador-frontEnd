import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  nome: string;

  produto: Produto = new Produto();
  listaProduto: Produto[];

  categoria: Categoria = new Categoria();
  listaCategoria: Categoria[];

  key = 'data'
  reverse = true
  seta: string = '↓';

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.findAllProduto();
    this.findAllCategoria();
  }

  trocar(){
    this.reverse = !this.reverse;
    if(this.seta == '↓')
      this.seta = '↑';
    else
      this.seta = '↓';
  }

  findAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp; 
    });
  }

  pesquisar(nome: string){
    this.findByNomeProduto(nome);
  }

  findByNomeProduto(nome: string) {
    if(nome.length == 0 || nome == undefined)
      this.findAllProduto();
    else
      this.produtoService.getByNomeProduto(nome).subscribe((resp: Produto[]) => {
        this.listaProduto	= resp;
      });
  }

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp;
    });
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.categoria.id).subscribe((resp: Categoria) => {
      this.categoria = resp;
    });
  }

}
