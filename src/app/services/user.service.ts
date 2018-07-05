import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../dashboard/user/model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  api: any = 'http://localhost:3000/dashboard/users';

  constructor( public http: HttpClient ) { }

  getUsers() {
    return this.http.get(this.api);
  }

  createUser(userData: UserModel) {
    // const url = `${this.api}${this.port}${this.service}`;
    return this.http.post(this.api, userData);

  }

  getUser(userId: String) {
    // const url = `${this.api}${this.port}${this.service}/${userId}`;
    // return this.http.get(this.api);
  }

  updateUser(userId: String, userData: UserModel ) {
    // const url = `${this.api}${this.port}${this.service}/${userId}`;
    // return this.http.put(url, userData );
  }

  deleteUser(userId: String) {
    // const url = `${this.api}${this.port}${this.service}/${userId}`;
    // return this.http.delete(url );
  }

}
