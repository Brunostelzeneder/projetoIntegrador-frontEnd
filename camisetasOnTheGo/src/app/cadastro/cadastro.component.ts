import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User();
  senha: string;
  hide: boolean = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrar() {
    if(this.senha === this.user.senha){
      this.authService.cadastrar(this.user).subscribe((resp: User) => 
      {
        this.user = resp;
        this.router.navigate(['/login']);
        alert('Usuário cadastrado com sucesso 😎');
      });
    } else {
      alert('As senhas não conferem 😔');
    }
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Insira um e-mail válido';
    }

    return this.email.hasError('email') ? 'E-mail inválido' : '';
  }

}
