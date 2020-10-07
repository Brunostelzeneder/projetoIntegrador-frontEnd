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
<<<<<<< HEAD
import { ProdutosComponent } from './produtos/produtos.component';
import { AdminComponent } from './admin/admin.component';
import { PostCategoriaComponent } from './post-categoria/post-categoria.component';
import { NgModule } from '@angular/core';
=======
import { SobrenosComponent } from './sobrenos/sobrenos.component';
>>>>>>> b6791d0cf46763ac03791e44b4b2aab840cd23e9

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContatoComponent,
    LoginComponent,
    CadastroComponent,
<<<<<<< HEAD
    ProdutosComponent,
    AdminComponent,
    PostCategoriaComponent
=======
    SobrenosComponent
>>>>>>> b6791d0cf46763ac03791e44b4b2aab840cd23e9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
