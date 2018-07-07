import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from './model/user.model';

import { UserService } from '../../services/user.service';
import swal from 'sweetalert2';

declare const $:any

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  formUser: FormGroup;
  creating:  Boolean = true;
  genres:   Array<any> = [ { code: 'm', name: 'Masculino'}, { code: 'f', name: 'Femenino' } ];
  rol:      Array<any> = [ { code: 'administrator', name: 'Administrador'}, { code: 'teacher', name: 'Instructor'} ];
  users:     Observable<UserModel[]>;
  usuario:  any = new UserModel('', '', '', '', '', '', '');
  usuarioId:  string;
 
  constructor(private _userService: UserService,
              private router: Router) {
              this.cargarUsuarios();
              
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
  }

  cargarUsuarios() {
     this._userService.getUsers()
      .subscribe(data => {
        this.users = data['user']
    });
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
      if (data['Ok'] === true) {
       
        swal('Good Job', 'Usuario creado exitosamente', 'success');
        this.cargarUsuarios();
      }
      //this.router.navigate(['/dashboard/users']);
      //this.formUser.reset();
      this.cargarUsuarios();
      
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

        this._userService.deleteUser(user['_id']).subscribe( data => {
          if (data['Ok'] === true) {
            swal('Good Job', 'Usuario eliminado exitosamente', 'success');
          }
          this.cargarUsuarios();
          //this.router.navigate(['/dashboard/users']);
        });

        swal(
          'Eliminado!',
          'El usuario fue eliminando exitosamente!.',
          'success'
        );
      }
    });

    return;
  }

  prepareToEditUser(user: UserModel){
    
    this.creating = false; 
    delete user.password
    this.formUser.patchValue(user);
    this.usuarioId = user._id 
    $('#UserModal').modal('show')
  }

  prepareToCreateUser(){
    this.creating = true;
    this.usuario = new UserModel('', '', '', '', '', '', '');
    this.formUser.patchValue(this.usuario)
    this.usuarioId = ""
    $('#UserModal').modal('show')
  }

  updateUser() {
    
    /*if (this.formUser.invalid) {
      swal('Bad Job', '¡Ups! Algo va mal, formulario inválido..!', 'error' );
      return;
    }*/
    
    this._userService.updateUser(this.usuarioId, this.formUser.value).subscribe( data => {

      if (data['Ok']) {
        
        swal('Good Job', 'Usuario editado exitosamente', 'success');
        
        //location.reload();
      } else {
        console.log(data);
      }

      this.cargarUsuarios();
      
    });
    
  }

  completeform(){
    if(this.creating){
        console.log("Creando...");
        this.registerUser()
    } else {
      console.log("Editando...");
      this.updateUser()

    }
    $('#UserModal').modal('hide')
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
    

  }
}