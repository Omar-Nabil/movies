import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error:string = '';
  isLoading:boolean = false;
  loginForm!:FormGroup;
  constructor(private _fb:FormBuilder, private _AuthService:AuthService, private _Router:Router) {}
  ngOnInit(): void {
    this.createloginForm();
  }
  createloginForm():void {
    this.loginForm = this._fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
    })
  }
  handleLogin(loginForm:FormGroup):void {
    this._AuthService.login(loginForm.value).subscribe({
      next: (response) => {
        this.isLoading = true;
        if(response.message === 'success') {
          this._Router.navigate(['/home']);
          this.isLoading = false;
          localStorage.setItem('userToken', response.token);
          this._AuthService.saveUser();
        }else {
          this.error = response.message;
        }
      },
      error: (err) => {console.log(err);}
    })
  }
}
