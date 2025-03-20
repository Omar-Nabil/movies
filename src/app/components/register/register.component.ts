import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoading:boolean = false;
  error:string = '';
  registerForm!:FormGroup;
  constructor(private _fb:FormBuilder, private _AuthService:AuthService, private _Router:Router) {}
  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm():void {
    this.registerForm = this._fb.group({
      first_name:['',[Validators.required]],
      last_name:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
      age:['',[Validators.required, Validators.max(100), Validators.min(18)]],
    })
  }
  handleRegister(registerForm:FormGroup):void {
    this._AuthService.register(registerForm.value).subscribe({
      next: (response) => {
        this.isLoading = true;
        if(response.message === 'success') {
          this._Router.navigate(['/login']);
          this.isLoading = false;
        } else {
          this.error = response.message;
        }
      },
      error: (err) => {console.log(err);
      }
    })
  }
}
