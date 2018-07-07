import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from './model/user.model';

import { UserService } from '../../services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})

export class UsersComponent implements OnInit {

  formUser: FormGroup;

  test: Array<any> = [ { code: 'm', name: 'Masculino'}, { code: 'f', name: 'Femenino' } ];
  rol:  Array<any> = [ { code: 'administrator', name: 'Administrador'}, { code: 'teacher', name: 'Instructor'} ];
  user: Array<any>;

<<<<<<< HEAD
  constructor(private _userService: UserService,
              private router: Router) {
            this.cargarUsuarios();
=======
  usuario: any = new UserModel('', '', '', '', '', '', '');
  usuarioDefaultGenre: string ;

  constructor(private _userService: UserService,
              private router: Router) {
              this.cargarUsuarios();
>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
          }

  ngOnInit() {

    this.formUser = new FormGroup({
        name:     new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        genre:    new FormControl(null, Validators.required),
        born:     new FormControl(null, Validators.required),
        email:    new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
        rol:      new FormControl(null, Validators.required)
      });
<<<<<<< HEAD

=======


  }

  cargarUsuarios() {
      this._userService.getUsers()
        .subscribe( data => { this.user = data.user; });
>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
  }

  cargarUsuarios() {
      this._userService.getUsers()
        .subscribe( data => { this.user = data['user'] });
  }
  registerUser() {



    if (this.formUser.invalid) {
      swal('Bad Job', '¡Ups! Algo va mal, formulario inválido..!', 'error' );
      return;
    }

    const usuario = new UserModel(
      this.formUser.value.name,
      this.formUser.value.lastname,
      this.formUser.value.genre,
      this.formUser.value.born,
      this.formUser.value.email,
      this.formUser.value.password,
      this.formUser.value.rol
    );

    this._userService.createUser(usuario).subscribe( data => {
<<<<<<< HEAD
      if (data['Ok']) {
        swal('Good Job', 'Usuario creado exitosamente', 'success');
      }
      this.formUser.reset();
=======
      if (data.Ok === true) {
        swal('Good Job', 'Usuario creado exitosamente', 'success');
      }
      this.formUser.reset();
      this.cargarUsuarios();
>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
      this.router.navigate(['/dashboard/users']);
    });
  }

  deleteUser(user: UserModel) {
    swal({
      title: 'Cuidado',
      text: '¿Quieres eliminar a ' + `${user.name}` ,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminalo!'
    }).then((result) => {

      if (result.value) {

        this._userService.deleteUser(user._id).subscribe( data => {
          if (data.Ok === true) {
            swal('Good Job', 'Usuario eliminado exitosamente', 'success');
          }
          this.cargarUsuarios();
          this.router.navigate(['/dashboard/users']);
        });

        swal(
          'Eliminado!',
          'El usuario fue eliminando exitosamente!.',
          'success'
        );
      }
    });

<<<<<<< HEAD
  deleteUser(id: String) {
    this._userService.deleteUser(id).subscribe( data => {
      if (data['Ok']) {
        swal('Good Job', 'Usuario eliminado exitosamente', 'success');
      }
      this.cargarUsuarios();
      this.router.navigate(['/dashboard/users']);
    });
    return;
  }
=======
    return;
  }

  updateUser(user: UserModel) {
    this._userService.getUser(user._id).subscribe( data => {

      this.usuario = data.user;
      this.usuarioDefaultGenre = this.usuario.genre ; // Esto envía 'm' o 'f' a usuarioDefaultGenre      

      console.log('Default Genre', this.usuarioDefaultGenre);
    });
  }



>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
}

