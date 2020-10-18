import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogData, DialogComponent } from 'src/app/dialog/dialog.component';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-delete-categoria',
  templateUrl: './delete-categoria.component.html',
  styleUrls: ['./delete-categoria.component.css']
})
export class DeleteCategoriaComponent implements OnInit {

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

    this.findAllProduto();
    this.findByIdCategoria(this.data.id);
  }
  
  apagar(id: number) {
    this.categoriaService.deleteByIdCategoria(id).subscribe((resp: Categoria) => {
      this.categoria = resp;
    });
    this.dialogRef.close();    
    this.router.navigate(['/admin']);
  }

  findByIdCategoria(id: number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) => {
      this.categoria = resp;
    });
  }

  findAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp; 
    });
  }

}
