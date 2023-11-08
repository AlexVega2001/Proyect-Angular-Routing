import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');
    if (token) {
      this.router.navigate(['home'])
    }
      // this.authService.login('eve.holt@reqres.in','cityslicka').subscribe(
      //   (response) => {
      //     console.log('Respuesta del Login: ', response);
      //     sessionStorage.setItem('token', response.token)
      //   },
      //   (error) => {
      //     console.error('Ha ocurrido un error al logearse: ' + error);
      //   },
      //   () => { console.info('Se ha completado llamada de login') }
      // );
  }

  loginUser(){
    sessionStorage.setItem('token', '123456');
  }

}
