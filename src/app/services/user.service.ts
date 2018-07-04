import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api: String = "http://localhost:"
  port: String = "3000"
  service: String = "/dashboard/users"


  constructor( public http: HttpClient ) { }

  getUsers(){
    let url = `${this.api}${this.port}${this.service}`
    return this.http.get(url)
  }

  createUser(userData: any){
    let url = `${this.api}${this.port}${this.service}`
    return this.http.post(url, userData);

  }

  getUser(userId: String){
    let url = `${this.api}${this.port}${this.service}/${userId}`
    return this.http.get(url);
  }

  updateUser(userId: String, userData: any ) {
    let url = `${this.api}${this.port}${this.service}/${userId}`
    return this.http.put(url, userData );
  }

  deleteUser(userId: String){
    let url = `${this.api}${this.port}${this.service}/${userId}`
    return this.http.delete(url );
  }

}
