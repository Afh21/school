import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api: any = 'http://localhost:3000';
  service: any = '/login';
  private url: string = `${this.api}${this.service}`

  constructor( public http: HttpClient ) { }

  getTokenWithLogin( credentials:any ) {

    return this.http.post(this.url, credentials )

  }

}
