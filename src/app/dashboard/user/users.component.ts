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
    console.log(this.formUser.value);
    if (!this.formUser.valid) {
      return;
    }
  }

  agregarUsuario( usuario: any ) {
    this._users.createUser( usuario );
    this.router.navigate(['/dashboard']);
  }
}
