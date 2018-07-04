import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  formUser: FormGroup;

  test: Array<any> = [ { code: 'masculino', name: 'Masculino'}, { code: 'femenino', name: 'Femenino' } ];
  rol:   Array<any> = [ { code: 'administrator', name: 'Administrador'}, { code: 'teacher', name: 'Instructor'} ];

  constructor(private _users: UserService,
              private router: Router) { }


  ngOnInit() {
    this.formUser = new FormGroup(
      {
        name:     new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        genre:    new FormControl(null, Validators.required),
        born:     new FormControl(null, Validators.required),
        email:    new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
        rol:      new FormControl(null, Validators.required),
        accept:   new FormControl(false, Validators.required),
      }
  );
  }


  registerUser() {

    if (!this.formUser.valid) {
        swal('Bad Job', '¡Debes aceptar las condiciones!', 'error');
      return;
    }


  }

  agregarUsuario( usuario: any ) {
    this._users.createUser( usuario );
    this.router.navigate(['/dashboard']);
  }
}
