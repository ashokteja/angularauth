import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginUserData = {
    email:'',
    password:''
  };
  constructor(private _auth:AuthService,
              private _router:Router,
              private toastr: ToastrService
    ) { }

  ngOnInit() {
  }
  loginUser(){
    if(this.loginUserData.email && this.loginUserData.password){
      this._auth.loginUser(this.loginUserData)
      .subscribe(
        res=> {
          if(res.statusCode == 200){
          localStorage.setItem('currentUser',JSON.stringify(res.currentUser));
          //localStorage.setItem('token',res.token);
            this._router.navigate(['/special']);
          }
          else{
            this.toastr.error(res.message, 'Login');
          }
        },
        err=>{
          if(err.statusCode === 401){
            this.toastr.error(err.message, 'Login');
          }
        }
        
      )
    }
    else{
      this.toastr.info("Please provide login Details", 'Login');
    }
  }
}
