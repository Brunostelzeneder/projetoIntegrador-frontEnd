import { BrowserModule } from '@angular/platform-browser';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { AdminComponent } from './admin/admin.component';
import { PostCategoriaComponent } from './post-categoria/post-categoria.component';
import { NgModule } from '@angular/core';
import { UpdateProdutoComponent } from './update-produto/update-produto.component';
import { UpdateCategoriaComponent } from './update-categoria/update-categoria.component';

import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
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
  ],
  imports: [
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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
