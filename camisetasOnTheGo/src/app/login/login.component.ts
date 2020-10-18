import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin();
  hide: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logar() {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp;
      localStorage.setItem('token', this.userLogin.token);
      this.router.navigate(['/home']);
    })
  }

}
