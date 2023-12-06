import { Injectable } from '@angular/core';

import { LoginUser } from '../../Models/User/loginUser.interface'
import { ResponseLogin } from '../../Models/User/ResponseLogin'

import { HttpClient, HttpHeaders } from '@angular/common/http'


import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  domain:string = "https://localhost:7040/";

  constructor(private http: HttpClient) { }

  LoginUser(form: LoginUser): Observable<ResponseLogin>{

    let url = this.domain + "api/Auth/login";
    return this.http.post<ResponseLogin>(url, form);
  }

}
