import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Receipe } from './receipes/receipe.model';
import { ReceipeService } from './receipes/receipe.service';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';
import { AuthService } from './auth/auth.service';


@Injectable()
export class ServerService {

  constructor(private authService: AuthService, private receipeService: ReceipeService, private http: Http) {
  }

  saveReceipeData(receipe: Receipe[]) {
    const token = this.authService.getToken();
    return this.http.put('https://ng-receipe-book-1de3a.firebaseio.com/receipe.json?auth=' + token, receipe)
  }
  fetchReceipeData() {
    // return this.http.get('https://ng-receipe-book-1de3a.firebaseio.com/receipe.json')
    // .pipe(map((res)=>{
    //   return res.json();
    // }))
    const token = this.authService.getToken();
    this.http.get('https://ng-receipe-book-1de3a.firebaseio.com/receipe.json?auth=' + token)
      .subscribe((response: Response) => {
        console.log(response.json())
        const receipe: Receipe[] = response.json();
        this.receipeService.setReceipe(receipe)
      })
  }
  
}
