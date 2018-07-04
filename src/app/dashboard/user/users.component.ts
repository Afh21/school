import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  form: FormGroup;

  constructor(private _users: UserService,
              private router: Router) { }


  ngOnInit() {
  }

  agregarUsuario( usuario: any ) {
    this._users.createUser( usuario );
    this.router.navigate(['/dashboard']);
  }

  registerUser() {

  }

}
