import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-item-atual',
  templateUrl: './item-atual.component.html',
  styleUrls: ['./item-atual.component.css']
})
export class ItemAtualComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    let id = this.route.snapshot.params["id"];

    this.findByIdProduto(id);
  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe( (resp: Produto) => {
      this.produto = resp;
    });
  }

}
