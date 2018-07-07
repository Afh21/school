<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> Afh21-master
import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';

<<<<<<< HEAD
=======
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5

>>>>>>> Afh21-master
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
<<<<<<< HEAD

export class LoginComponent implements OnInit {

=======
export class LoginComponent implements OnInit {

<<<<<<< HEAD
>>>>>>> Afh21-master
  formLogin: FormGroup;

  constructor(
    public _login: LoginService,
    public router: Router) { }

  loginUser(){

    const badCredentialsError = () => swal('Ups! :C ', 'Correo o contraseña incorrecta.', 'error');

    if (this.formLogin.valid) {
      this._login.getTokenWithLogin(this.formLogin.value).subscribe( data => {
        if(data['Ok'] ) {
          this.router.navigate(['/dashboard'])
        } else {
          badCredentialsError();
          return;
        }
      })
      
    }  else {
      badCredentialsError();
      return;
    }
    
  }

  ngOnInit() {
    this.formLogin = new FormGroup({
      email:     new FormControl(null, [Validators.required, Validators.email ]),
      password:     new FormControl(null, [Validators.required, Validators.minLength(8)] ),

    });

    
  }

  

<<<<<<< HEAD
=======
=======
  constructor() { }

  ngOnInit() {
  }

>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
>>>>>>> Afh21-master
}
