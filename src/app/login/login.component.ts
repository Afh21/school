import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor() { }

  loginUser(){

    if (!this.formLogin.valid) {
      swal('Ups! :C ', 'Correo o contraseña incorrecta.', 'error');
    return;
  }
    
  }

  ngOnInit() {
    this.formLogin = new FormGroup({
      login:     new FormControl(null, [Validators.required, Validators.email ]),
      password:     new FormControl(null, [Validators.required, Validators.minLength(8)] ),

    });

    
  }

  

}
