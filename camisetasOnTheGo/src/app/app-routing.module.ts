import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostCategoriaComponent } from './categoria/post-categoria/post-categoria.component';
import { ProdutosComponent } from './produto/produtos.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { UpdateProdutoComponent } from './produto/update-produto/update-produto.component';
import { ItemAtualComponent } from './produto/item-atual/item-atual.component';
import { UpdateCategoriaComponent } from './categoria/update-categoria/update-categoria.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'post-categoria', component: PostCategoriaComponent},
  {path: 'update-categoria', component: UpdateCategoriaComponent},
  {path: 'update-produto', component: UpdateProdutoComponent},
  {path: 'sobrenos', component: SobrenosComponent},
  {path: 'produtos/item/:id', component: ItemAtualComponent},
  {path: 'editar-categoria/:id', component: UpdateCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
