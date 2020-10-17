import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { DeleteCategoriaComponent } from '../delete-categoria/delete-categoria.component';
import { UpdateCategoriaComponent } from '../update-categoria/update-categoria.component';


@Component({
  selector: 'app-post-categoria',
  templateUrl: './post-categoria.component.html',
  styleUrls: ['./post-categoria.component.css']
})
export class PostCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();
  listaCategoria: Categoria[];
  
  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private updateDialog: MatDialog,
    private deleteDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAllCategoria();
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

  cadastrar() {
    if(!this.categoria.descricao)
      alert('Você precisa dizer o nome da categoria, oras 🤨');
    else
      this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
        this.categoria = resp;
        this.router.navigate(['/admin']);
        alert('Sua categoria foi cadastrada com sucesso 🤝');
      })
  }

  atualizar(id: number): void {
    const dialogRef = this.updateDialog.open(
      UpdateCategoriaComponent, {
        data: {id: id}
      });

    dialogRef.afterClosed().subscribe(resp => {});
  }

  apagar(id: number): void {
    const dialogRef = this.deleteDialog.open(
      DeleteCategoriaComponent, { 
        data: {id: id} 
      });
  }
}
