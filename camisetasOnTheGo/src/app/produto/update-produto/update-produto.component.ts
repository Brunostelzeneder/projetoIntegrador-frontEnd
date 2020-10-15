import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../../dialog/dialog.component';
import { Categoria } from '../../model/Categoria';
import { Produto } from '../../model/Produto';
import { CategoriaService } from '../../service/categoria.service';
import { ProdutoService } from '../../service/produto.service';
import { DeleteProdutoComponent } from '../delete-produto/delete-produto.component';

@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.component.html',
  styleUrls: ['./update-produto.component.css']
})
export class UpdateProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  listaProduto: Produto[];

  categoria: Categoria = new Categoria();
  listaCategoria: Categoria[];

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private dialog: MatDialog,
    private deleteDialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.findAllProduto();
  }

  findAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp; 
    });
  }

  atualizar(id: number): void {
    const dialogRef = this.dialog.open(
      DialogComponent, {
        width: '650px',
        data: {
          id: id
        }
      }
    );

    dialogRef.afterClosed().subscribe(resp => {
    });
  
  }

  apagar(id: number): void {
    const dialogRef = this.deleteDialog.open(
      DeleteProdutoComponent, { 
        data: { 
          id: id 
        } 
      }
    );

    dialogRef.afterClosed().subscribe(resp => {
    });
  }

}

