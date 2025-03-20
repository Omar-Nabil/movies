import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/user';
import { UserData } from '../interfaces/user-data';
const initialUserData: UserData = {
  _id: '0', // Change this to a valid string value
  first_name: '',
  last_name: '',
  email: '',
  age: 0,
  iat: 0,
  __v: 0
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:BehaviorSubject<UserData> = new BehaviorSubject<UserData>(initialUserData);

  constructor(private _HttpClient:HttpClient, private _Router:Router) {
    if(localStorage.getItem('userToken')) {
      this.saveUser();
    }
  }

  saveUser():void {
    let token = JSON.stringify(localStorage.getItem('userToken'));
    let decode:UserData = jwtDecode(token);
    this.userData.next(decode);
  }

  register(registerForm:User):Observable<any> {
    return this._HttpClient.post(environment.baseURL+'signup', registerForm);
  }
  login(loginForm:User):Observable<any> {
    return this._HttpClient.post(environment.baseURL+'signin', loginForm);
  }
  logout() {
    localStorage.removeItem("userToken");
    this.userData.next(initialUserData);
    this._Router.navigate(['/login']);
  }
}
