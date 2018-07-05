import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../dashboard/user/model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

<<<<<<< HEAD


  api: any = 'http://localhost:3000/dashboard/users';
=======
  api: any = 'http://localhost:3000';
  service: any = '/dashboard/users';
>>>>>>> 21e8c9d6c9d3ffbf150172684c0d3f7e5573a3aa


  constructor( public http: HttpClient ) { }


  getUsers() {
<<<<<<< HEAD

    return this.http.get(this.api);
=======
    const url = `${this.api}${this.service}`;
    return this.http.get(url);
>>>>>>> 21e8c9d6c9d3ffbf150172684c0d3f7e5573a3aa
  }

  createUser(userData: UserModel) {
    const url = `${this.api}${this.service}`;
    return this.http.post(url, userData);

  }

  getUser(userId: String) {
<<<<<<< HEAD

    // const url = `${this.api}${this.port}${this.service}/${userId}`;
    // return this.http.get(this.api);
=======
    const url = `${this.api}${this.service}/${userId}`;
    return this.http.get(this.api);
>>>>>>> 21e8c9d6c9d3ffbf150172684c0d3f7e5573a3aa
  }

  updateUser(userId: String, userData: UserModel ) {
    const url = `${this.api}${this.service}/${userId}`;
    return this.http.put(url, userData );
  }

  deleteUser(userId: String) {
<<<<<<< HEAD
    // const url = `${this.api}${this.port}${this.service}/${userId}`;
    // return this.http.delete(url );

=======
    const url = `${this.api}${this.service}/${userId}`;
    return this.http.delete(url);
>>>>>>> 21e8c9d6c9d3ffbf150172684c0d3f7e5573a3aa
  }

}
