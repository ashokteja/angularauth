import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';
  constructor(private http :  HttpClient,private _router:Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user);
  }
  loginUser(user){
    return this.http.post<any>(this._loginUrl, user);
  }
  loggedIn(){
    return !!localStorage.getItem('currentUser');
  }
  getToken(){
    //return localStorage.getItem('currentUser');
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser)
      return currentUser.token;
    else
      return false;
  }
  logoutUser(){
    localStorage.removeItem('currentUser');
    this._router.navigate(['/login']);
  }
  getUserName(){
    var userData = JSON.parse(localStorage.getItem('currentUser'));
    if(userData)
      return userData.userName
    else
      return ''
    } 
  getUserId(){
    var userData = JSON.parse(localStorage.getItem('currentUser'));
    if(userData)
      return userData.userId
    else
      return ''
    } 
}
