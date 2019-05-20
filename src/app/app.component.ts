import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(){
     firebase.initializeApp({
       apiKey:'AIzaSyBdxKGBSCojshTwbOd-5mAnFkls_2kD9pk',
       authDomain:'ng-receipe-book-1de3a'
     })
  }
  // receipe:string='false'
  // shoppingList:string='false'
  //  onDisplayReceipe(selectHeader:String){
  //     if(selectHeader==='DisplayReceipe'){
  //        this.receipe='true'
  //     }
  //     else {
  //       this.receipe='false'
  //     }
  //  }
  //  onDisplayShoppingList(selectHeader:String){
  //   if(selectHeader==='DisplayShoppingList'){
  //      this.shoppingList='true'
  //   }
  //   else {
  //     this.shoppingList='false'
  //   }
//  }
}
