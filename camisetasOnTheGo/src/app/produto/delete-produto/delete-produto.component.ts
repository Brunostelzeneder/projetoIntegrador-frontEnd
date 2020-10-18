import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  listaProduto: Produto[];

  categoria: Categoria = new Categoria();
  listaCategoria: Categoria[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogComponent>,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.findAllCategoria();
    this.findByIdProduto(this.data.id);
  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;
    });
  }

  apagar(id: number) {
    this.produtoService.deleteByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;
    });
    this.dialogRef.close();    
    this.router.navigate(['/admin']);
  }

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp; 
    });
  }

}
