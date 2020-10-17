import { BrowserModule } from '@angular/platform-browser';
import { OrderModule } from 'ngx-order-pipe';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UpdateProdutoComponent } from './produto/update-produto/update-produto.component';
import { DeleteCategoriaComponent } from './categoria/delete-categoria/delete-categoria.component';
import { UpdateCategoriaComponent } from './categoria/update-categoria/update-categoria.component';
import { DialogComponent } from './dialog/dialog.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ProdutosComponent } from './produto/produtos.component';
import { AdminComponent } from './admin/admin.component';
import { PostCategoriaComponent } from './categoria/post-categoria/post-categoria.component';
import { DeleteProdutoComponent } from './produto/delete-produto/delete-produto.component';
import { ItemAtualComponent } from './produto/item-atual/item-atual.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';



@NgModule({
  declarations: 
  [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContatoComponent,
    LoginComponent,
    CadastroComponent,
    MenuLateralComponent,
    ProdutosComponent,
    AdminComponent,
    PostCategoriaComponent,
    UpdateProdutoComponent,
    UpdateCategoriaComponent,
    DialogComponent,
    DeleteProdutoComponent,
    ItemAtualComponent,
    DeleteCategoriaComponent,
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
