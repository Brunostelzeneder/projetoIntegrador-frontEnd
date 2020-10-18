import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Produto } from '../model/Produto';
import { Categoria } from '../model/Categoria';
import { ProdutoService } from '../service/produto.service';
import { CategoriaService } from '../service/categoria.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

interface Tamanho {
  value: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  produtoControl = new FormControl('primary');

  tamanhos: Tamanho[] = [
    {value: 'PP'},
    {value: 'P'},
    {value: 'M'},
    {value: 'G'},
    {value: 'GG'},
    {value: 'XG'}
  ];

  produto: Produto = new Produto()
  listaProduto: Produto[];

  categoria: Categoria = new Categoria();
  listaCategoria: Categoria[];

  idCategoria: number;

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.findAllProduto();
    this.findAllCategoria();
  }

  findAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp; 
    });
  }

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp;
    });
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
    });
  }

  publicar() {
    this.categoria.id = this.idCategoria;
    this.produto.categoria = this.categoria;

    if(!(this.produto.nome && this.produto.categoria && this.produto.instituicao 
      && this.produto.preco && this.produto.tamanho && this.produto.quantidade && this.produto.linkImagem))
      alert("Você precisa preencher todos os campos para poder cadastrar um produto... 😒");
    else
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
        this.produto = resp;
        this.produto = new Produto();
        alert("O produto foi cadastrado com sucesso! 👏");
        this.router.navigate(['/produtos'])
      }); 
  }

}
