import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http'
import {NgIf} from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { LoginUser } from '../../../../Models/User/loginUser.interface'
import { ResponseLogin } from '../../../../Models/User/ResponseLogin'

import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    NgIf,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

    ReactiveFormsModule, FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });



  constructor(private api: ApiService, private router:Router) { }

  errorStatus: boolean = false;
  errorMessage:string = "Message";

  ngOnInit(): void{
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(typeof localStorage !== 'undefined' && localStorage.getItem('token')){
      //this.router.navigate(['book-list']);
    }
  }


  onLogin() {
    
    const email = this.loginForm.get('email')?.value || '';
    const password = this.loginForm.get('password')?.value || '';

    const form: LoginUser = {
      email,
      password
    };

    this.api.LoginUser(form).subscribe(data => {
      let dataResponse:ResponseLogin = data;
      if(dataResponse.status == true){        
        localStorage.setItem("token", dataResponse.message);
        this.router.navigate(['home']);
      }
    },
    (error: HttpErrorResponse) => {
      //if (error.status === 400 && error.error && error.error.message) {
      if (error) {
        this.errorStatus = true;
        this.errorMessage = error.error.message;
        alert(this.errorMessage);
      } else {
        this.errorMessage = "Error al iniciar sesión."
      }
    });
  }

  // mostrar(){
  //   this.errorStatus = !this.errorStatus;
  // }

}
