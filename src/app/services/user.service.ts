import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../dashboard/user/model/user.model';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api: any = 'http://localhost:3000';
  service: any = '/dashboard/users';

  constructor( public http: HttpClient ) { }


  getUsers() {
    const url = `${this.api}${this.service}`;
    return this.http.get(url);
  }

  createUser(userData: UserModel) {
    const url = `${this.api}${this.service}`;
    return this.http.post(url, userData);

  }

  getUser(userId: String) {
    const url = `${this.api}${this.service}/${userId}`;
    return this.http.get(url);
  }

  updateUser(userId: String, userData: UserModel ) {
    const url = `${this.api}${this.service}/${userId}`;
    return this.http.put(url, userData );
  }

  deleteUser(userId: String) {
    const url = `${this.api}${this.service}/${userId}`;
    return this.http.delete(url);
  }

}
