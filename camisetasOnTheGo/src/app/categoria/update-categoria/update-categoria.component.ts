import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  selector: 'app-update-categoria',
  templateUrl: './update-categoria.component.html',
  styleUrls: ['./update-categoria.component.css']
})
export class UpdateCategoriaComponent implements OnInit {

  produto: Produto = new Produto();
  listaProduto: Produto[];

  categoria: Categoria = new Categoria();
  listaCategoria: Categoria[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    public dialogRef: MatDialogRef<DialogComponent>,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.findByIdCategoria(this.data.id);
    this.findAllProduto();
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

  salvar() {
    this.categoriaService.putCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
    });
    this.dialogRef.close();
    this.router.navigate(['/admin']);    
  }

}
