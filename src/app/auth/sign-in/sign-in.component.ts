import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase'
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
   email:string;
   password:string;
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSubmit(f:NgForm){
    this.email=f.value.email;
    this.password=f.value.password;
     this.authService.signInUser(this.email,this.password)
  }

}
