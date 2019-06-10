import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};
  constructor(private _auth:AuthService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  registerUser(){
    console.log("register")
    // this._auth.registerUser(this.registerUserData)
    // .subscribe(
    //   res=> {
    //     if(res.statusCode === 200){
    //       this.toastr.success('Registration Successfully Completed', 'Registration');
    //     }
    //     this.registerUserData = {};
    //   },
    //   err=>{
    //     if(err.statusCode === 400){
    //       this.toastr.success('Registration Failed', 'Registration');
    //     }
    //   }
    // )

  }

}
