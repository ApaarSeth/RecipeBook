import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
     email:string;
     password:string;
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  
  onSubmit(f:NgForm){
  this.email=f.value.email;
  this.password=f.value.password;
  this.authService.signUpUser(this.email,this.password)
  }

}
